# Use this file to easily define all of your cron jobs.
#
# It's helpful, but not entirely necessary to understand cron before proceeding.
# http://en.wikipedia.org/wiki/Cron

# Example:
#
# set :output, "/path/to/my/cron_log.log"
#
# every 2.hours do
#   command "/usr/bin/some_great_command"
#   runner "MyModel.some_method"
#   rake "some:great:rake:task"
# end
#
# every 4.days do
#   runner "AnotherModel.prune_old_records"
# end

# Learn more: http://github.com/javan/whenever


set :output, "/config/cron_log.log"

# this command will update the search index every 6 hours and notify you
every 6.hours do
  command "ALGOLIA_API_KEY='56c038bbf2a7d22b11b52a832620c662' bundle exec jekyll algolia"
  command "echo 'Index updated!'"
end
