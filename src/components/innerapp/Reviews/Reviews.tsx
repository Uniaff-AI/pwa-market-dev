import React from 'react';
import { Star } from 'lucide-react';
import { appConfig } from '../../../config/appConfig';
import { Avatar } from '../../ui/avatar';

export const Reviews = () => {
  const { reviews, display } = appConfig;

  if (!display.showReviews) {
    return null;
  }

  return (
    <div className="mt-6">
      <h3 className="text-lg font-semibold mb-4">Ulasan Produk</h3>
      <div className="space-y-4">
        {reviews.map((review) => (
          <div key={review.id} className="border-b border-gray-200 pb-4">
            <div className="flex items-start gap-3">
              {/* Аватарка */}
              {display.showReviewAvatars && (
                <Avatar
                  src={review.avatar}
                  alt={review.author}
                  initials={review.avatarInitials}
                  size="md"
                  fallbackColor="bg-green-500"
                />
              )}
              
              <div className="flex-1">
                {/* Заголовок отзыва */}
                <div className="flex items-center gap-2 mb-2">
                  <span className="font-medium text-gray-900">{review.author}</span>
                  {review.verified && (
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                      Terverifikasi
                    </span>
                  )}
                </div>

                {/* Рейтинг */}
                {display.showRatings && (
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, index) => (
                      <Star
                        key={index}
                        className={`w-4 h-4 ${
                          index < review.rating
                            ? 'text-yellow-400 fill-current'
                            : 'text-gray-300'
                        }`}
                      />
                    ))}
                    <span className="text-sm text-gray-600 ml-2">
                      {review.rating}.0
                    </span>
                  </div>
                )}

                {/* Дата */}
                <div className="text-sm text-gray-500 mb-2">
                  {new Date(review.date).toLocaleDateString('id-ID', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </div>

                {/* Текст отзыва */}
                <p className="text-gray-700 mb-2">{review.text}</p>

                {/* Полезность */}
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    {review.helpful} orang menemukan ulasan ini bermanfaat
                  </span>
                  <button className="text-sm text-blue-600 hover:text-blue-800">
                    Bermanfaat
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Кнопка "Написать отзыв" */}
      <div className="mt-6">
        <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors">
          Tulis Ulasan
        </button>
      </div>
    </div>
  );
};
