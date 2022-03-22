export * from './auth.service';
import { AuthService } from './auth.service';
export * from './car.service';
import { CarService } from './car.service';
export * from './order.service';
import { OrderService } from './order.service';
export * from './user.service';
import { UserService } from './user.service';
export const APIS = [AuthService, CarService, OrderService, UserService];
