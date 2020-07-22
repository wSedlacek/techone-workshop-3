const isFunction = (fn: any) => typeof fn === 'function';

export interface SubscriptionLike {
  unsubscribe(): void;
}

export class Subscriptions extends Array<SubscriptionLike> {
  /**
   * Subscription sink that holds Observable subscriptions
   * until you call unsubscribe on it in ngOnDestroy.
   *
   * @example
   * In Angular:
   * ```
   *   private subs = new Subscriptions();
   *   ...
   *   this.subs.sink = observable$.subscribe(
   *   this.subs.add(observable$.subscribe(...));
   *   ...
   *   ngOnDestroy() {
   *     this.subs.unsubscribe();
   *   }
   * ```
   */
  constructor() {
    super();
  }

  /**
   * Assign subscription to this sink to add it to the tracked subscriptions
   * @example
   *  this.subs.sink = observable$.subscribe(...);
   */
  public set sink(subscription: SubscriptionLike) {
    this.push(subscription);
  }

  public get sink(): SubscriptionLike {
    throw new Error('Subscriptions: `sink` is a write only property.');
  }

  /**
   * Unsubscribe to all subscriptions in ngOnDestroy()
   * @example
   *   ngOnDestroy() {
   *     this.subs.unsubscribe();
   *   }
   */
  public unsubscribe(): void {
    this.forEach((sub) => {
      if (sub && isFunction(sub.unsubscribe)) sub.unsubscribe();
    });
  }

  /**
   * Add subscriptions to the tracked subscriptions
   * @example
   *  this.subs.add(observable$.subscribe(...));
   */
  public add(...subscriptions: SubscriptionLike[]): void {
    this.concat(subscriptions);
  }
}
