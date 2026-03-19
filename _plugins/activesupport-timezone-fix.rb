# Fix deprecation warning: to_time will always preserve the timezone offset in Rails 8.0
ActiveSupport.to_time_preserves_timezone = true
