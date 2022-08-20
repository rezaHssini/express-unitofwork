import { InjectionToken } from "injection-js";
import { UnitOfWork } from "repositories/unit-of-work/unit-of-work";

export const UNIT_OF_WORK = new InjectionToken<UnitOfWork>("UNIT_OF_WORK");
