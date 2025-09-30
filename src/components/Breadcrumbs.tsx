import {
  BreadcrumbItem,
  Breadcrumbs as HeroBreadcrumbs,
} from "@heroui/breadcrumbs";
import { Link } from "@heroui/link";
import { useLocation } from "react-router-dom";

export const Breadcrumbs = () => {
  const location = useLocation();
  const pathSegments = location.pathname.split("/").filter(Boolean);

  return (
    <HeroBreadcrumbs separator="/" variant="bordered">
      <BreadcrumbItem>
        <Link href="/">Home</Link>
      </BreadcrumbItem>
      {pathSegments.map((segment, index) => {
        const href = "/" + pathSegments.slice(0, index + 1).join("/");
        const label = segment.charAt(0).toUpperCase() + segment.slice(1);

        return (
          <BreadcrumbItem key={href}>
            {index === pathSegments.length - 1 ? (
              <span>{label}</span>
            ) : (
              <Link href={href}>{label}</Link>
            )}
          </BreadcrumbItem>
        );
      })}
    </HeroBreadcrumbs>
  );
};
