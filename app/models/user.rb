# frozen_string_literal: true

# == Schema Information
#
# Table name: users
#
#  id              :bigint(8)        not null, primary key
#  firstname       :string           not null
#  lastname        :string           not null
#  email           :string           not null
#  session_token   :string           not null
#  password_digest :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  validates :firstname, :lastname, :email, :password_digest, :session_token, presence: true
  validates :email, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }

  has_many :reviews
  has_one_attached :photo

  attr_reader :password

  after_initialize :ensure_session_token, :ensure_profile_picture

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil unless user.is_password?(password)
    user
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(password_digest).is_password?(password)
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

  def ensure_profile_picture
    if !self.photo.attached?
      self.photo.attach(io: File.open("./app/assets/images/users/default_user.png"), filename: "default_user.png")
    end
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    save!
    self.session_token
  end
end
