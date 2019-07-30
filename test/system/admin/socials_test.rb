require "application_system_test_case"

class Admin::SocialsTest < ApplicationSystemTestCase
  setup do
    @admin_social = admin_socials(:one)
  end

  test "visiting the index" do
    visit admin_socials_url
    assert_selector "h1", text: "Admin/Socials"
  end

  test "creating a Social" do
    visit admin_socials_url
    click_on "New Admin/Social"

    click_on "Create Social"

    assert_text "Social was successfully created"
    click_on "Back"
  end

  test "updating a Social" do
    visit admin_socials_url
    click_on "Edit", match: :first

    click_on "Update Social"

    assert_text "Social was successfully updated"
    click_on "Back"
  end

  test "destroying a Social" do
    visit admin_socials_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Social was successfully destroyed"
  end
end
