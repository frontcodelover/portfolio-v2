import { useEffect, useState } from 'react';
import { Octokit } from '@octokit/rest';

// Typage des commits récupérés
export type Commit = {
  sha: string;
  commit: {
    author: {
      name: string;
      date: string;
    };
    message: string;
  };
  author: {
    login: string;
    avatar_url: string;
  };
  html_url: string;
};

export const useGitHubCommits = () => {
  const [commits, setCommits] = useState<Commit[]>([]);
  const [totalCount, setTotalCount] = useState<number>(0); // Ajout de totalCount pour stocker la valeur de total_count
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchCommits = async () => {
      const octokit = new Octokit({
        auth: process.env.NEXT_PUBLIC_GITHUB_TOKEN,
      });

      try {
        const response = await octokit.request('GET https://api.github.com/search/commits?q=author:{owner}', {
          owner: 'frontcodelover',
          headers: {
            accept: 'application/vnd.github.cloak-preview+json',
          },
        });
        setCommits(response.data.items); // On récupère les commits dans 'items'
        setTotalCount(response.data.total_count); // On stocke le total_count
        setLoading(false);
      } catch (err) {
        console.error(err);
        setError('Failed to fetch commits');
        setLoading(false);
      }
    };

    fetchCommits();
  }, []);

  return { commits, totalCount, loading, error }; // On retourne totalCount également
};
