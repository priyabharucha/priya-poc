import {Attribute, Directive, ElementRef, Inject, InjectionToken, OnDestroy, OnInit, Optional} from '@angular/core';
import {Event, NavigationEnd, Router} from '@angular/router';
import {Subscription} from 'rxjs';
import {distinctUntilChanged, filter} from 'rxjs/operators';
type WindowXY = [number, number];
@Directive({
  selector: 'router-outlet'
})
export class RouterOutletDirective implements OnInit, OnDestroy {
private routerEventsSubscription: Subscription;
  private currentXY: WindowXY;
  private windowScroll:  WindowXY;
// I initialize the router-outlet directive.
  constructor(
    private elementRef: ElementRef,
    private router: Router
  ) {
    this.elementRef = elementRef;
    this.router = router;
    this.routerEventsSubscription = null;
  }
public ngOnDestroy(): void {
    if (this.routerEventsSubscription) {
      this.routerEventsSubscription.unsubscribe();
    }
    this.windowCoordinates = this.currentXY;
  }
public ngOnInit(): void {
    
    this.currentXY = this.windowCoordinates;
    this.windowScroll = [0, 0]; // reset window scroll
this.routerEventsSubscription = this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      distinctUntilChanged((prev: NavigationEnd, next: NavigationEnd) => next && next.url === prev.url)
    )
      .subscribe(
        (event: Event): void => {
          const node = this.elementRef.nativeElement.parentNode;
          node.scrollTop = 0;
        }
      );
  }
private get windowCoordinates(): WindowXY {
    return [window.scrollX, window.scrollY] as WindowXY;
  }
private set windowCoordinates(xy: WindowXY) {
    window.scrollTo(xy[0] || 0, xy[1] || 0);
  }
}