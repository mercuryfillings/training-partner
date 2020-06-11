# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Technique.destroy_all
TrainingSession.destroy_all

@user = User.create!({ name: 'mercuryfillings', email: 'scott.delbango@gmail.com', password: '123456' })

@user = User.create!({ name: 'littlejitsboi', email: 'jits@juji.com', password: '123456' })

p "#{User.count} user(s) created"

Technique.create!(name: 'armbar', user: @user, category: 'submission', position: 'guard', orientation: 'bottom', times_executed: 1)

Technique.create!(name: 'armbar', user: @user, category: 'submission', position: 'mount', orientation: 'top', times_executed: 1)

Technique.create!(name: 'omoplata', user: @user, category: 'submission', position: 'guard', orientation: 'bottom', times_executed: 1)

p "#{Technique.count} technique(s) created"

TrainingSession.create!(user: @user, rolls: 5, opponents: 3, subs: 10, taps: 3)

TrainingSession.create!(user: @user, rolls: 10, opponents: 7, subs: 4, taps: 11)

TrainingSession.create!(user: @user, rolls: 12, opponents: 12, subs: 12, taps: 0)

TrainingSession.create!(user: @user, rolls: 6, opponents: 5, subs: 1, taps: 13)

p "#{TrainingSession.count} training session(s) created"
