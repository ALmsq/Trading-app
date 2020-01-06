class OwnershipSerializer < ActiveModel::Serializer
  attributes :id, :amount
  has_one :user
  has_one :coin
end
