https://alinma-sa.webex.com/meet/meabdelkader


constructor() {
  this.router.events
   .pipe(filter(e => e instanceof NavigationStart))
   .subscribe((e: NavigationStart) => {
    const navigation  = this.router.getCurrentNavigation();
    this.orderId = navigation.extras.state ? navigation.extras.state.orderId : 0;
   });

 }



