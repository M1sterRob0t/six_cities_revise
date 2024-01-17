import { TOffer, TServerOffer } from '../types/offers';

export function offersAdapter(serverOffers: TServerOffer[]): TOffer[] {
  return serverOffers.map((serverOffer) => ({
    bedrooms: serverOffer.bedrooms,
    city: serverOffer.city,
    description: serverOffer.description,
    goods: serverOffer.goods,
    host: {
      avatarUrl: serverOffer.host.avatar_url,
      id: serverOffer.host.id,
      isPro: serverOffer.host.is_pro,
      name: serverOffer.host.name,
    },
    id: serverOffer.id,
    images: serverOffer.images,
    isFavorite: serverOffer.is_favorite,
    isPremium: serverOffer.is_premium,
    location: {
      latitude: serverOffer.location.latitude,
      longitude: serverOffer.location.longitude,
      zoom: serverOffer.location.zoom,
    },
    maxAdults: serverOffer.max_adults,
    previewImage: serverOffer.preview_image,
    price: serverOffer.price,
    rating: serverOffer.rating,
    title: serverOffer.title,
    type: serverOffer.type,
  }));
}

export function offerAdapter(serverOffer: TServerOffer): TOffer {
  return {
    bedrooms: serverOffer.bedrooms,
    city: serverOffer.city,
    description: serverOffer.description,
    goods: serverOffer.goods,
    host: {
      avatarUrl: serverOffer.host.avatar_url,
      id: serverOffer.host.id,
      isPro: serverOffer.host.is_pro,
      name: serverOffer.host.name,
    },
    id: serverOffer.id,
    images: serverOffer.images,
    isFavorite: serverOffer.is_favorite,
    isPremium: serverOffer.is_premium,
    location: {
      latitude: serverOffer.location.latitude,
      longitude: serverOffer.location.longitude,
      zoom: serverOffer.location.zoom,
    },
    maxAdults: serverOffer.max_adults,
    previewImage: serverOffer.preview_image,
    price: serverOffer.price,
    rating: serverOffer.rating,
    title: serverOffer.title,
    type: serverOffer.type,
  };
}
