require 'test_helper'

class Admin::SocialsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @admin_social = admin_socials(:one)
  end

  test "should get index" do
    get admin_socials_url
    assert_response :success
  end

  test "should get new" do
    get new_admin_social_url
    assert_response :success
  end

  test "should create admin_social" do
    assert_difference('Admin::Social.count') do
      post admin_socials_url, params: { admin_social: {  } }
    end

    assert_redirected_to admin_social_url(Admin::Social.last)
  end

  test "should show admin_social" do
    get admin_social_url(@admin_social)
    assert_response :success
  end

  test "should get edit" do
    get edit_admin_social_url(@admin_social)
    assert_response :success
  end

  test "should update admin_social" do
    patch admin_social_url(@admin_social), params: { admin_social: {  } }
    assert_redirected_to admin_social_url(@admin_social)
  end

  test "should destroy admin_social" do
    assert_difference('Admin::Social.count', -1) do
      delete admin_social_url(@admin_social)
    end

    assert_redirected_to admin_socials_url
  end
end
