import { useState, useEffect, useCallback } from 'react';
import profileData from '../data/profile.json';
import { getPortfolio } from '../lib/api';

export function usePortfolio() {
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProfile = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getPortfolio();
      setProfile(data);
    } catch (err) {
      console.warn('Failed to fetch portfolio from API, using local fallback:', err);
      setProfile(profileData);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    fetchProfile();
  }, [fetchProfile]);

  return { profile, loading, error, refetch: fetchProfile };
}
