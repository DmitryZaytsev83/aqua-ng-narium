import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Event, NavigationEnd, NavigationStart, Router} from '@angular/router';
import {asyncScheduler} from 'rxjs';
import {filter, observeOn, scan} from 'rxjs/operators';

interface ScrollPositionRestore {
  event: Event;
  positions: { [K: number]: number };
  trigger: 'imperative' | 'popstate' | 'hashchange' | undefined;
  idToRestore: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('contentArea')
  private contentArea!: ElementRef<HTMLDivElement>;

  constructor(private router: Router) {
  }

  ngOnInit(): void {
    this.router.events
      .pipe(
        filter(
          event =>
            event instanceof NavigationStart || event instanceof NavigationEnd,
        ),
        scan<Event, ScrollPositionRestore>((acc, event) => ({
          event,
          positions: {
            ...acc.positions,
            ...(event instanceof NavigationStart
              ? {
                [event.id]: this.contentArea.nativeElement.scrollTop,
              }
              : {}),
          },
          trigger:
            event instanceof NavigationStart
              ? event.navigationTrigger
              : acc.trigger,
          idToRestore:
            (event instanceof NavigationStart &&
              event.restoredState &&
              event.restoredState.navigationId + 1) ||
            acc.idToRestore,
        })),
        filter(
          ({event, trigger}) => event instanceof NavigationEnd && !!trigger,
        ),
        observeOn(asyncScheduler),
      )
      .subscribe(({trigger, positions, idToRestore}) => {
        if (trigger === 'imperative') {
          this.contentArea.nativeElement.scrollTop = 0;
        }

        if (trigger === 'popstate') {
          this.contentArea.nativeElement.scrollTop = positions[idToRestore];
        }
      });
  }
}
