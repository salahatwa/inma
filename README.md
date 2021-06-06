 <div class="col-lg-2 col-md-3 form-group mt-4">
                        <button class="btn btn-green btn-sm  mr-2" type="submit"
                            [disabled]="isLoading||!customerSearchForm.valid" (click)="getCustomersDetails()">
                            {{'common.button.search'|translate}}
                            <span *ngIf="isLoading" class="spinner-border spinner-border-sm"></span>
                        </button>

                        <button class="btn btn-moonlight-blue btn-sm" type="reset" [disabled]="isLoading"
                            (click)="clear()">{{'enter_order.clearBtn'|translate}}</button>

                    </div>
