require 'test_helper'

class WidgetTest < ActiveSupport::TestCase
  test "no negative stock" do
    wid = Widget.new(name:"Dog",description:"Animal",stock:-1)
    assert_not wid.valid?
  end
end
