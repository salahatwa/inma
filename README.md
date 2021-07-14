https://alinma-sa.webex.com/meet/meabdelkader

@GetMapping("/me")
	public ResponseEntity<UserData> getCurrentUser(@CurrentUser UserPrincipal currentUser,
			@RequestHeader(value = "Authorization") String authorization) {

		return ResponseEntity.ok(authService.getCurrentLoggedInUser(currentUser, authorization));
	}
  
  
  public UserData getCurrentLoggedInUser(UserPrincipal currentUser, String authorization) {
		UserData userData = new UserData(getJwtFromRequest(authorization), currentUser);
		log.info("Current logged in user" + userData.getProfile().getId());
		return userData;
	}
  
  
  private String getJwtFromRequest(String bearerToken) {
		if (StringUtils.hasText(bearerToken) && bearerToken.startsWith("Bearer ")) {
			return bearerToken.substring(7, bearerToken.length());
		}
		return null;
	}



