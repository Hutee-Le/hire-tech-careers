import { OmitType } from '@nestjs/mapped-types';
import { CreateCompanyDto } from './create-company.dto';

export class UpdateCompanyDto extends OmitType(CreateCompanyDto, [
    'name', 'address', 'description', 
] as const) {}