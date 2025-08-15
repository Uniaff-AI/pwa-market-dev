import React from 'react';
import { Star } from 'lucide-react';
import { GooglePlayText } from '@/content/googlePlayText';
import { appConfig } from '@/config/appConfig';
import { Avatar } from '../../ui/avatar';

export const GooglePlayReviews = () => {
  const { reviews } = GooglePlayText;
  const { googlePlay } = appConfig;

  return (
    <div className="space-y-4">
      {reviews.map((review) => (
        <div key={review.id} className="border-b border-gray-200 pb-4">
          <div className="flex items-start gap-3">
            {/* Аватарка */}
            {googlePlay.showReviewAvatars && (
              <Avatar
                src={review.avatar}
                alt={review.userTitle}
                initials={review.avatarInitials || review.userLetter}
                size="md"
                fallbackColor="bg-blue-500"
              />
            )}
            
            <div className="flex-1">
              {/* Заголовок отзыва */}
              <div className="flex items-center gap-2 mb-2">
                <span className="font-medium text-gray-900">{review.userTitle}</span>
              </div>

              {/* Рейтинг */}
              <div className="flex items-center gap-1 mb-2">
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    className={`w-4 h-4 ${
                      index < review.userScore
                        ? 'text-yellow-400 fill-current'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
                <span className="text-sm text-gray-600 ml-2">
                  {review.userScore}.0
                </span>
              </div>

              {/* Дата */}
              {googlePlay.showReviewDates && (
                <div className="text-sm text-gray-500 mb-2">
                  {review.singleReviewDate}
                </div>
              )}

              {/* Текст отзыва */}
              <p className="text-gray-700 mb-2">{review.singleReviewText}</p>

              {/* Полезность */}
              {googlePlay.showReviewLikes && (
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500">
                    {review.likes}
                  </span>
                  <button className="text-sm text-blue-600 hover:text-blue-800">
                    Bermanfaat
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
