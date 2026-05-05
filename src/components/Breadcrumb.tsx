import Link from 'next/link';
import { breadcrumbMap } from '@/data/navigation';

interface BreadcrumbProps {
  current: string;
}

type BreadcrumbData = {
  label: string;
  parent?: string;
};

export default function Breadcrumb({ current }: BreadcrumbProps) {
  const breadcrumbs: { label: string; href?: string }[] = [];
  const breadcrumbData: BreadcrumbData | undefined = breadcrumbMap[current];

  if (!breadcrumbData) {
    return null;
  }

  // Build breadcrumb trail
  let path: string | undefined = current;
  while (path) {
    const data: BreadcrumbData | undefined = breadcrumbMap[path];
    if (!data) break;
    
    if (path !== '/') {
      breadcrumbs.unshift({ label: data.label, href: path });
    }
    path = data.parent;
  }

  // Always include home
  breadcrumbs.unshift({ label: 'ホーム', href: '/' });

  return (
    <nav className="border-b border-secondary-200 bg-secondary-50" aria-label="Breadcrumb">
      <div className="container-xl py-4">
        <ol className="flex flex-wrap gap-2 text-sm">
          {breadcrumbs.map((item, index) => (
            <li key={item.href || index} className="flex items-center gap-2">
              {item.href ? (
                <>
                  <Link href={item.href} className="text-primary-700 hover:text-secondary-900">
                    {item.label}
                  </Link>
                  {index < breadcrumbs.length - 1 && (
                    <span className="text-secondary-500">/</span>
                  )}
                </>
              ) : (
                <>
                  <span className="text-secondary-700">{item.label}</span>
                </>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
