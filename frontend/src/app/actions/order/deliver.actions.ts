import { createAction, props } from '@ngrx/store';

export const orderDeliver = createAction(
  '[Deliver] Order Deliver',
  props<{ orderId: string }>()
);

export const orderDeliverSuccess = createAction(
  '[Deliver] Order Deliver Success'
);

export const orderDeliverFailure = createAction(
  '[Deliver] Order Deliver Failure',
  props<{ error: any }>()
);
