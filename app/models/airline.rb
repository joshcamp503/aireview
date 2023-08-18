class Airline < ApplicationRecord
  has_many :reviews

  before_create :slugify
  before_update :slugify

  def slugify
    self.slug = name.parameterize
  end

  def avg_score
    return unless reviews.count.positive?
    
    reviews.average(:score).round(2).to_f
  end
end
