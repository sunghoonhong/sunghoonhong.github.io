# Fix deprecation warning: to_time will always preserve the timezone offset in Rails 8.0
if ActiveSupport.respond_to?(:to_time_preserves_timezone=)
  ActiveSupport.to_time_preserves_timezone = true
end
