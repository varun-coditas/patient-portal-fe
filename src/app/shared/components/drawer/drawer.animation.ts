import { trigger, state, style, transition, animate } from "@angular/animations";

export const drawerAnimation = trigger('drawerAnimation', [
  state('void', style({ transform: 'translateX(100%)' })),
  state('open', style({ transform: 'translateX(0)' })),
  transition('void => open', animate('300ms ease-in-out')),
  transition('open => void', animate('300ms ease-in-out')),
]);
