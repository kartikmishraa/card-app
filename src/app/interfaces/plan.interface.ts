/* This file exports the interface to be used in card-app */

interface Feature {
  name: string;
  included: boolean;
}
export interface Plan {
  type?: string;
  price?: number;
  features?: Array<Feature>;
}
