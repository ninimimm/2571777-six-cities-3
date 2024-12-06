import { CreateOfferDto, OfferEntity } from './index.js';
import { DocumentType } from '@typegoose/typegoose';

export interface OfferService {
  create(dto: CreateOfferDto): Promise<DocumentType<OfferEntity>>;
  findById(id: string): Promise<DocumentType<OfferEntity> | null>;
  findAll(city?: string, limit?: number, sortBy?: 'date' | 'price'): Promise<DocumentType<OfferEntity>[]>;
  findPremium(city: string, limit?: number): Promise<DocumentType<OfferEntity>[]>;
  update(offerId: string, dto: CreateOfferDto): Promise<DocumentType<OfferEntity>>;
  delete(offerId: string): Promise<DocumentType<OfferEntity>>;
}