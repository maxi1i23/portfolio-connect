import { useQuery } from "@tanstack/react-query";
import { Star, GitFork, ArrowUpRight } from "lucide-react";
import { profile } from "@/data/cv";

type Repo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  fork: boolean;
};

async function fetchRepos(): Promise<Repo[]> {
  const res = await fetch(
    `https://api.github.com/users/${profile.github}/repos?per_page=100&sort=updated`,
  );
  if (!res.ok) throw new Error("GitHub indisponible");
  const data: Repo[] = await res.json();
  return data.filter((r) => !r.fork).slice(0, 12);
}

export function GithubProjects() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["github-repos", profile.github],
    queryFn: fetchRepos,
    staleTime: 1000 * 60 * 10,
  });

  return (
    <div className="mt-10">
      {isLoading && (
        <div className="grid gap-5 sm:grid-cols-2">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="h-40 animate-pulse rounded-lg bg-surface/70" />
          ))}
        </div>
      )}

      {isError && (
        <p className="text-sm text-muted-foreground">
          Impossible de charger les dépôts pour le moment.{" "}
          <a
            className="text-gold underline underline-offset-4"
            href={`https://github.com/${profile.github}`}
            target="_blank"
            rel="noreferrer"
          >
            Voir sur GitHub
          </a>
        </p>
      )}

      <div className="grid gap-5 sm:grid-cols-2">
        {data?.map((repo) => (
          <a
            key={repo.id}
            href={repo.html_url}
            target="_blank"
            rel="noreferrer"
            className="card-lux group flex flex-col justify-between rounded-lg p-6"
          >
            <div>
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-mono text-base tracking-tight text-gold-soft">{repo.name}</h3>
                <ArrowUpRight className="size-4 shrink-0 text-muted-foreground transition group-hover:text-gold" />
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {repo.description ?? "Sans description."}
              </p>
            </div>
            <div className="mt-6 flex items-center gap-4 text-xs text-muted-foreground">
              {repo.language && (
                <span className="rounded-full border border-border px-2.5 py-1">
                  {repo.language}
                </span>
              )}
              <span className="inline-flex items-center gap-1">
                <Star className="size-3.5" /> {repo.stargazers_count}
              </span>
              <span className="inline-flex items-center gap-1">
                <GitFork className="size-3.5" /> {repo.forks_count}
              </span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
