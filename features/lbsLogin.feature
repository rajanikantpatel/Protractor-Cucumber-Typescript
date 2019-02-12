Feature: To login into Developer portal with LBS user creds
	@BAT @Regression (order = 1)
	Scenario: To test LBS successul login
		Given I am on LBS login page
		When I provide username:"r3patel.1985@gmail.com"
		And I provide password:"Java@1234"
		And I click SignIn button
		Then Page title is:"Developer Hub"
		And Header title is:"Locate APIs"
		And I click on sign out page

	# @Regression (order = 2)
	# Scenario: To test LBS login failure
	# 	Given I am on LBS login page
	# 	When I provide username:"r3patel.1985@gmail.com"
	# 	And I provide password:"Dummy@1234"
	# 	And I click SignIn button
	# 	Then Message on SiginIn Page is:"Invalid credentials entered, 6 wrong attempts will result in lockout of account"	