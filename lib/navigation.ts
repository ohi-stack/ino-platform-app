export type NavigationLink = {
  label: string;
  href: string;
  description?: string;
};

export type NavigationColumn = {
  heading: string;
  links: NavigationLink[];
};

export type MegaMenuItem = {
  label: string;
  href: string;
  columns: NavigationColumn[];
};

/**
 * Canonical INO Platform navigation.
 *
 * Standard:
 * - Exactly 7 primary navigation items.
 * - Each mega menu may contain up to 6 columns.
 * - Header actions such as Apply and Portal Login remain separate from the 7 primary links.
 */
export const primaryNavigation: MegaMenuItem[] = [
  {
    label: "Home",
    href: "/",
    columns: [
      {
        heading: "Welcome",
        links: [
          { label: "Platform Home", href: "/" },
          { label: "About the INO Platform", href: "/about" },
          { label: "Platform Status", href: "/platform-status" },
          { label: "Latest Announcements", href: "/announcements" },
        ],
      },
      {
        heading: "Quick Access",
        links: [
          { label: "Member Dashboard", href: "/dashboard" },
          { label: "Apply for Membership", href: "/membership/apply" },
          { label: "Verify a Certificate", href: "/certificates/verify" },
          { label: "Contact Support", href: "/support" },
        ],
      },
    ],
  },
  {
    label: "Membership & Identity",
    href: "/membership",
    columns: [
      {
        heading: "Membership",
        links: [
          { label: "Membership Overview", href: "/membership" },
          { label: "Apply for Membership", href: "/membership/apply" },
          { label: "Application Status", href: "/membership/status" },
          { label: "Renew Membership", href: "/membership/renew" },
        ],
      },
      {
        heading: "Identity & Heritage",
        links: [
          { label: "Identity Overview", href: "/identity" },
          { label: "Identity Declaration", href: "/identity/declaration" },
          { label: "Honor Your Ancestry", href: "/identity/ancestry" },
          { label: "Identity Standards", href: "/identity/standards" },
        ],
      },
      {
        heading: "Family & Genealogy",
        links: [
          { label: "Family Tree", href: "/family-tree" },
          { label: "People's Book of Names", href: "/identity/peoples-book-of-names" },
          { label: "Tribal & Family Archives", href: "/identity/archives" },
          { label: "Family Groups", href: "/groups/family" },
        ],
      },
      {
        heading: "Member Records",
        links: [
          { label: "Digital Membership Card", href: "/membership/card" },
          { label: "Membership Certificates", href: "/certificates/membership" },
          { label: "Uploaded Documents", href: "/documents" },
          { label: "Profile & Privacy", href: "/settings/privacy" },
        ],
      },
    ],
  },
  {
    label: "Programs & Services",
    href: "/programs",
    columns: [
      {
        heading: "Community Programs",
        links: [
          { label: "Programs Overview", href: "/programs" },
          { label: "Family Support", href: "/programs/family-support" },
          { label: "Youth Programs", href: "/programs/youth" },
          { label: "Elder Services", href: "/programs/elders" },
        ],
      },
      {
        heading: "Education",
        links: [
          { label: "Learning Center", href: "/learning" },
          { label: "Courses", href: "/learning/courses" },
          { label: "Workshops & Webinars", href: "/learning/events" },
          { label: "Certificates", href: "/certificates" },
        ],
      },
      {
        heading: "Economic Development",
        links: [
          { label: "Economic Development", href: "/programs/economic-development" },
          { label: "Workforce Readiness", href: "/programs/workforce" },
          { label: "Entrepreneurship", href: "/programs/entrepreneurship" },
          { label: "Financial Education", href: "/programs/financial-education" },
        ],
      },
      {
        heading: "Participation",
        links: [
          { label: "My Applications", href: "/dashboard/applications" },
          { label: "Program Participation", href: "/dashboard/programs" },
          { label: "Program Documents", href: "/documents/programs" },
          { label: "Completion Records", href: "/certificates/programs" },
        ],
      },
    ],
  },
  {
    label: "Housing & Community",
    href: "/housing",
    columns: [
      {
        heading: "Housing Portal",
        links: [
          { label: "Housing Overview", href: "/housing" },
          { label: "Housing Programs", href: "/housing/programs" },
          { label: "Housing Application", href: "/housing/apply" },
          { label: "Application Status", href: "/housing/status" },
        ],
      },
      {
        heading: "HomeEra",
        links: [
          { label: "HomeEra Program", href: "/housing/homeera" },
          { label: "Housing Needs Assessment", href: "/housing/homeera/assessment" },
          { label: "Housing Readiness", href: "/housing/homeera/readiness" },
          { label: "Partner Resources", href: "/housing/homeera/resources" },
        ],
      },
      {
        heading: "Development Projects",
        links: [
          { label: "Available Projects", href: "/housing/projects" },
          { label: "Project Registry", href: "/housing/registry" },
          { label: "Waiting Lists", href: "/housing/waiting-lists" },
          { label: "Schedule an Appointment", href: "/housing/appointments" },
        ],
      },
      {
        heading: "Community Resources",
        links: [
          { label: "Community Development", href: "/housing/community-development" },
          { label: "Service Areas", href: "/maps/service-areas" },
          { label: "Housing Education", href: "/learning/housing" },
          { label: "Housing Support", href: "/support/housing" },
        ],
      },
    ],
  },
  {
    label: "Treasury & Grants",
    href: "/treasury",
    columns: [
      {
        heading: "Treasury",
        links: [
          { label: "Treasury Overview", href: "/treasury" },
          { label: "Financial Policies", href: "/treasury/policies" },
          { label: "Performance Metrics", href: "/treasury/metrics" },
          { label: "Treasury Reports", href: "/treasury/reports" },
        ],
      },
      {
        heading: "Grants",
        links: [
          { label: "Grant Opportunities", href: "/grants" },
          { label: "Grant Opportunity Register", href: "/grants/register" },
          { label: "Funding Pipeline", href: "/grants/pipeline" },
          { label: "Grant Deadlines", href: "/grants/deadlines" },
        ],
      },
      {
        heading: "Applications & Compliance",
        links: [
          { label: "Submit a Funding Idea", href: "/grants/ideas" },
          { label: "Application Tracking", href: "/grants/applications" },
          { label: "Compliance Calendar", href: "/grants/compliance" },
          { label: "Closeout Records", href: "/grants/closeout" },
        ],
      },
      {
        heading: "Authorized Access",
        links: [
          { label: "Treasury Dashboard", href: "/admin/treasury" },
          { label: "Grants Dashboard", href: "/admin/grants" },
          { label: "Reports", href: "/admin/reports" },
          { label: "Audit Records", href: "/admin/audit" },
        ],
      },
    ],
  },
  {
    label: "Community & Engagement",
    href: "/community",
    columns: [
      {
        heading: "Volunteer",
        links: [
          { label: "Volunteer Overview", href: "/volunteers" },
          { label: "Apply to Volunteer", href: "/volunteers/apply" },
          { label: "Opportunities", href: "/volunteers/opportunities" },
          { label: "Track Service Hours", href: "/volunteers/hours" },
        ],
      },
      {
        heading: "Community",
        links: [
          { label: "Member Directory", href: "/members" },
          { label: "Groups & Circles", href: "/groups" },
          { label: "Community Activity", href: "/community/activity" },
          { label: "Announcements", href: "/announcements" },
        ],
      },
      {
        heading: "Events",
        links: [
          { label: "Events Calendar", href: "/events" },
          { label: "Register or RSVP", href: "/events/register" },
          { label: "My Event History", href: "/dashboard/events" },
          { label: "Event Check-In", href: "/events/check-in" },
        ],
      },
      {
        heading: "Communications",
        links: [
          { label: "Messages", href: "/messages" },
          { label: "Notifications", href: "/notifications" },
          { label: "Media Center", href: "/media" },
          { label: "Subscribe to Updates", href: "/subscribe" },
        ],
      },
    ],
  },
  {
    label: "Governance & Resources",
    href: "/governance",
    columns: [
      {
        heading: "Governance",
        links: [
          { label: "Governance Overview", href: "/governance" },
          { label: "Constitution", href: "/governance/constitution" },
          { label: "Policies & Procedures", href: "/governance/policies" },
          { label: "Public Notices", href: "/governance/notices" },
        ],
      },
      {
        heading: "Records",
        links: [
          { label: "Document Center", href: "/documents" },
          { label: "Public Records", href: "/documents/public" },
          { label: "Document Requests", href: "/documents/requests" },
          { label: "Version History", href: "/documents/history" },
        ],
      },
      {
        heading: "Verification",
        links: [
          { label: "Certificate Verification", href: "/certificates/verify" },
          { label: "Identity Record Verification", href: "/identity/verify" },
          { label: "ODIN Registry", href: "/odin-registry" },
          { label: "Institutional Documents", href: "/documents/institutional" },
        ],
      },
      {
        heading: "Help & Operations",
        links: [
          { label: "Support Center", href: "/support" },
          { label: "Documentation", href: "/docs" },
          { label: "Accessibility", href: "/accessibility" },
          { label: "Privacy & Terms", href: "/legal" },
        ],
      },
      {
        heading: "Platform Administration",
        links: [
          { label: "Administrative Portal", href: "/admin" },
          { label: "System Status", href: "/admin/system" },
          { label: "Sync Center", href: "/admin/sync" },
          { label: "Production Checklist", href: "/admin/production-checklist" },
        ],
      },
    ],
  },
];

export const headerActions: NavigationLink[] = [
  { label: "Apply for Membership", href: "/membership/apply" },
  { label: "Portal Login", href: "/login" },
];

export const footerNavigation: NavigationColumn[] = [
  {
    heading: "INO Platform",
    links: [
      { label: "About", href: "/about" },
      { label: "Platform Status", href: "/platform-status" },
      { label: "Contact", href: "/support" },
    ],
  },
  {
    heading: "Membership & Programs",
    links: [
      { label: "Membership", href: "/membership" },
      { label: "Programs", href: "/programs" },
      { label: "Housing", href: "/housing" },
    ],
  },
  {
    heading: "Governance & Records",
    links: [
      { label: "Governance", href: "/governance" },
      { label: "Documents", href: "/documents" },
      { label: "Verification", href: "/certificates/verify" },
    ],
  },
  {
    heading: "Community & Support",
    links: [
      { label: "Volunteer", href: "/volunteers" },
      { label: "Events", href: "/events" },
      { label: "Support", href: "/support" },
    ],
  },
];
