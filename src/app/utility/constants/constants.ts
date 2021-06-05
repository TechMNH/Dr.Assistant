import { PasswordStrength, UserTypes } from "src/app/models/common.model";
import { LogLevel } from "../services/logger.service";

export class Constants {

    public static readonly ADMIN_SIGNUP: string = '/admin/signup';
    public static readonly DOCTOR_SIGNUP: string = '/doctor/signup';
    public static readonly PATIENT_SIGNUP: string = '/patient/signup';
    public static readonly GUEST_SIGNUP: string = '/home/guest/dashboard';

    public static readonly ADMIN_SIGNIN: string = '/admin/signin';
    public static readonly DOCTOR_SIGNIN: string = '/doctor/signin';
    public static readonly PATIENT_SIGNIN: string = '/patient/signin';
    public static readonly GUEST_SIGNIN: string = '/guest/signin';

    public static readonly ADMIN_DASHBOARD: string = '/admin/dashboard';
    public static readonly DOCTOR_DASHBOARD: string = '/doctor/dashboard';
    public static readonly PATIENT_DASHBOARD: string = '/patient/dashboard';
    public static readonly GUEST_DASHBOARD: string = '/home/guest/dashboard';

    public static readonly SIGNUP_DOCTOR: string = '';

    public static readonly USER_TYPE_ADMIN: UserTypes = 'admin';
    public static readonly USER_TYPE_DOCTOR: UserTypes = 'doc';
    public static readonly USER_TYPE_PATIENT: UserTypes = 'pat';
    public static readonly USER_TYPE_GUEST: UserTypes = 'guest';

    public static readonly LOG_LEVEL_ERROR: LogLevel = 'error';
    public static readonly LOG_LEVEL_DEBUG: LogLevel = 'debug';
    public static readonly LOG_LEVEL_TRACE: LogLevel = 'trace';
    public static readonly LOG_LEVEL_INFO: LogLevel = 'info';
    public static readonly LOG_LEVEL_FATAL: LogLevel = 'fatal';
    public static readonly LOG_LEVEL_LOG: LogLevel = 'log';
    public static readonly LOG_LEVEL_WARN: LogLevel = 'warn';

    public static readonly PASSWORD_STRENGTH_STRONG: PasswordStrength = 'strong';
    public static readonly PASSWORD_STRENGTH_MEDIUM: PasswordStrength = 'medium';
    public static readonly PASSWORD_STRENGTH_WEAK: PasswordStrength = 'weak';

    public static readonly PASSWORD_REGEX: RegExp = /^(?=.*[0-9]).{1,}(?=.*[a-z]).{1,}(?=.*[A-Z]).{1,}(?=.*[!@#$&*]).{1,}.{8,}$/;
}