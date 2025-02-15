'use client';

import { getSignInUrl, getSignUpUrl, signOut } from '@workos-inc/authkit-nextjs';
import { useAuth } from '@workos-inc/authkit-nextjs/components';
import { useEffect, useState } from 'react';

export default function UserMenu() {
  const { user, loading } = useAuth();

	const [signInUrl, setSignInUrl] = useState(null);
	const [signUpUrl, setSignUpUrl] = useState(null);
	useEffect(() => {
		getSignInUrl().then(setSignInUrl);
		getSignUpUrl().then(setSignUpUrl);
	}, []);

	if (loading) {
		return <div>Loading auth...</div>
	} else if (user) {
		return <div>
			<h2>Welcome back, {user?.firstName ?? "user"}</h2>
			<button onClick={() => signOut()}>Sign out</button>
		</div>
	} else {
		return <div>
			<h2>Please sign in</h2>
			<a href={signInUrl}>Log in</a> - <a href={signUpUrl}>Sign Up</a>
		</div>
	}
}