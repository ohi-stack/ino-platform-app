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
 * Canonical navigation for indigenousnation.org and app.indigenousnations.org.
 *
 * Rules:
 * - Exactly seven primary navigation items.
 * - No mega menu contains more than six columns.
 * - Apply and Portal Login remain separate header actions.
 */
export const primaryNavigation: MegaMenuItem[] = [
  {
    label: "Home",
    href: "/",
    columns: [
      {
        heading: "Start Here",
        links: [
          { label: "Homepage", href: "/" },
          { label: "About the Nation", href: "/about" },
          { label: "Current Initiatives", href: "/initiatives" },
          { label: "Community Programs", href: "/programs" },
          { label: "Membership Information", href: "/membership" },
        ],
      },
      {
        heading: "Updates & Notices",
        links: [
          { label: "Latest News", href: "/news" },
          { label: "Public Notices", href: "/notices" },
          { label: "Upcoming Events", href: "/events" },
          { label: "Nation Announcements", href: "/news/announcements" },
          { label: "Leadership Updates", href: "/news/leadership" },
        ],
      },
      {
        heading: "Take Action",
        links: [
          { label: "Support the Nation", href: "/support-ino" },
          { label: "Become a Member", href: "/membership/apply" },
          { label: "Volunteer", href: "/volunteers" },
          { label: "Attend an Event", href: "/events" },
          { label: "Contact INO", href: "/contact" },
        ],
      },
    ],
  },
  {
    label: "About INO",
    href: "/about",
    columns: [
      {
        heading: "Nation Overview",
        links: [
          { label: "About the Indigenous Nation of Onegodia", href: "/about" },
          { label: "Mission, Vision, and Purpose", href: "/about/mission" },
          { label: "Our History", href: "/about/history" },
          { label: "Founding and Institutional Development", href: "/about/founding" },
          { label: "Meaning of Onegodia", href: "/about/meaning-of-onegodia" },
          { label: "Frequently Asked Questions", href: "/about/faq" },
        ],
      },
      {
        heading: "Beliefs & Identity",
        links: [
          { label: "Beliefs and Guiding Principles", href: "/about/beliefs" },
          { label: "Community and Cultural Identity", href: "/about/community-identity" },
          { label: "Institutional Status", href: "/about/institutional-status" },
          { label: "Official Name and Identity", href: "/about/official-identity" },
          { label: "Public Identity Statement", href: "/about/public-identity-statement" },
        ],
      },
      {
        heading: "Leadership",
        links: [
          { label: "Office of the Chief", href: "/leadership/office-of-the-chief" },
          { label: "One Gregory Onegodian", href: "/leadership/one-gregory-onegodian" },
          { label: "Leadership Council", href: "/leadership/council" },
          { label: "Officers and Administrators", href: "/leadership/officers" },
          { label: "Department Directors", href: "/leadership/directors" },
          { label: "Community Advisors", href: "/leadership/advisors" },
        ],
      },
      {
        heading: "Leadership Records",
        links: [
          { label: "Leadership Responsibilities", href: "/leadership/responsibilities" },
          { label: "Leadership Notices", href: "/leadership/notices" },
          { label: "Leadership History", href: "/history/leadership" },
          { label: "Media Biography", href: "/about/media-biography" },
        ],
      },
      {
        heading: "Symbols & Chronology",
        links: [
          { label: "Official Seal", href: "/about/seal" },
          { label: "Symbols and Emblems", href: "/about/symbols" },
          { label: "OneGodian Calendar", href: "/calendar" },
          { label: "Institutional Chronology", href: "/history/chronology" },
          { label: "Historical Records", href: "/archives/historical-records" },
        ],
      },
    ],
  },
  {
    label: "Governance & Departments",
    href: "/governance",
    columns: [
      {
        heading: "Governing Documents",
        links: [
          { label: "Constitution", href: "/governance/constitution" },
          { label: "Governance Charter", href: "/governance/charter" },
          { label: "Bylaws", href: "/governance/bylaws" },
          { label: "Administrative Policies", href: "/governance/policies" },
          { label: "Codes and Standards", href: "/governance/codes" },
          { label: "Amendments", href: "/governance/amendments" },
        ],
      },
      {
        heading: "Official Actions",
        links: [
          { label: "Resolutions", href: "/governance/resolutions" },
          { label: "Declarations", href: "/governance/declarations" },
          { label: "Official Notices", href: "/governance/notices" },
          { label: "Document Archive", href: "/documents/governance" },
          { label: "Meeting Records", href: "/documents/meeting-records" },
        ],
      },
      {
        heading: "Administration",
        links: [
          { label: "Governance Structure", href: "/governance/structure" },
          { label: "Offices and Departments", href: "/departments" },
          { label: "Leadership Authority", href: "/governance/leadership-authority" },
          { label: "Administrative Procedures", href: "/governance/procedures" },
          { label: "Meeting Procedures", href: "/governance/meetings" },
        ],
      },
      {
        heading: "Accountability & Records",
        links: [
          { label: "Public Records", href: "/records" },
          { label: "Records Retention", href: "/records/retention" },
          { label: "Institutional Accountability", href: "/governance/accountability" },
          { label: "Internal Controls", href: "/governance/internal-controls" },
          { label: "Ethics and Conflict of Interest", href: "/governance/ethics" },
        ],
      },
      {
        heading: "Councils & Committees",
        links: [
          { label: "Leadership Council", href: "/committees/leadership-council" },
          { label: "Membership Committee", href: "/committees/membership" },
          { label: "Treasury Committee", href: "/committees/treasury" },
          { label: "Housing Committee", href: "/committees/housing" },
          { label: "Cultural Preservation Committee", href: "/committees/cultural-preservation" },
          { label: "Education Committee", href: "/committees/education" },
          { label: "Community Services Committee", href: "/committees/community-services" },
          { label: "Volunteer Committee", href: "/committees/volunteer" },
          { label: "Advisory Committees", href: "/committees/advisory" },
        ],
      },
      {
        heading: "Departments & Offices",
        links: [
          { label: "Office of the Chief", href: "/departments/office-of-the-chief" },
          { label: "Membership and Enrollment Office", href: "/departments/membership" },
          { label: "Treasury and Grants Office", href: "/departments/treasury-grants" },
          { label: "Housing and Community Development", href: "/departments/housing" },
          { label: "Cultural Preservation Office", href: "/departments/culture" },
          { label: "Education and Workforce Office", href: "/departments/education" },
          { label: "Community Services Office", href: "/departments/community-services" },
          { label: "Volunteer Services Office", href: "/departments/volunteers" },
          { label: "Records and Archives Office", href: "/departments/records" },
          { label: "Communications Office", href: "/departments/communications" },
          { label: "Technology and Platform Administration", href: "/departments/technology" },
          { label: "Compliance and Accountability Office", href: "/departments/compliance" },
        ],
      },
    ],
  },
  {
    label: "Membership & Citizenship",
    href: "/membership",
    columns: [
      {
        heading: "Membership",
        links: [
          { label: "Become a Member", href: "/membership/apply" },
          { label: "Membership Eligibility", href: "/membership/eligibility" },
          { label: "Membership Categories", href: "/membership/categories" },
          { label: "Membership Benefits", href: "/membership/benefits" },
          { label: "Membership Responsibilities", href: "/membership/responsibilities" },
          { label: "Membership FAQ", href: "/membership/faq" },
        ],
      },
      {
        heading: "Applications & Renewal",
        links: [
          { label: "Membership Application", href: "/membership/apply" },
          { label: "Application Requirements", href: "/membership/requirements" },
          { label: "Membership Fees", href: "/membership/fees" },
          { label: "Membership Renewal", href: "/membership/renew" },
          { label: "Membership Status", href: "/membership/status" },
        ],
      },
      {
        heading: "Citizenship & Enrollment",
        links: [
          { label: "Citizenship Overview", href: "/citizenship" },
          { label: "Citizenship Eligibility", href: "/citizenship/eligibility" },
          { label: "Citizenship Application", href: "/citizenship/apply" },
          { label: "Enrollment Process", href: "/citizenship/enrollment" },
          { label: "Citizenship Review", href: "/citizenship/review" },
          { label: "Citizenship FAQ", href: "/citizenship/faq" },
        ],
      },
      {
        heading: "Lineage & Documents",
        links: [
          { label: "Family and Lineage Records", href: "/citizenship/lineage" },
          { label: "Supporting Documents", href: "/citizenship/documents" },
          { label: "Citizenship Certificate", href: "/citizenship/certificate" },
          { label: "Enrollment Status", href: "/citizenship/status" },
          { label: "Update Your Record", href: "/citizenship/update-record" },
        ],
      },
      {
        heading: "Member Services",
        links: [
          { label: "Member Dashboard", href: "/dashboard" },
          { label: "Member Login", href: "/login" },
          { label: "Member Directory", href: "/members" },
          { label: "Member Documents", href: "/documents/membership" },
          { label: "Member Certificates", href: "/certificates/membership" },
          { label: "Member Notices", href: "/members/notices" },
          { label: "Member Events", href: "/events/members" },
          { label: "Member Support", href: "/support/membership" },
          { label: "Report a Record Correction", href: "/forms/record-correction" },
          { label: "Contact Membership Services", href: "/contact/membership" },
        ],
      },
    ],
  },
  {
    label: "Programs, Housing & Land",
    href: "/programs",
    columns: [
      {
        heading: "Community Programs",
        links: [
          { label: "All Community Programs", href: "/programs" },
          { label: "Family Support", href: "/programs/family-support" },
          { label: "Youth Programs", href: "/programs/youth" },
          { label: "Elder Programs", href: "/programs/elders" },
          { label: "Cultural Programs", href: "/programs/cultural" },
          { label: "Faith-Based Programs", href: "/programs/faith-based" },
          { label: "Emergency Assistance", href: "/programs/emergency-assistance" },
          { label: "Food and Essential Needs", href: "/programs/food-essential-needs" },
        ],
      },
      {
        heading: "Education & Wellness",
        links: [
          { label: "Learning Center", href: "/learning" },
          { label: "Courses and Workshops", href: "/learning/courses" },
          { label: "Workforce Training", href: "/learning/workforce" },
          { label: "Financial Education", href: "/learning/financial-education" },
          { label: "Leadership Development", href: "/learning/leadership" },
          { label: "Community Wellness", href: "/programs/wellness" },
          { label: "Mental and Emotional Wellness", href: "/programs/wellness/mental-emotional" },
          { label: "Referral Resources", href: "/programs/wellness/referrals" },
        ],
      },
      {
        heading: "Economic Development",
        links: [
          { label: "Economic Development Overview", href: "/economic-development" },
          { label: "Entrepreneurship", href: "/economic-development/entrepreneurship" },
          { label: "Small Business Support", href: "/economic-development/small-business" },
          { label: "Workforce Development", href: "/economic-development/workforce" },
          { label: "Career Pathways", href: "/economic-development/careers" },
          { label: "Business Directory", href: "/economic-development/business-directory" },
          { label: "Procurement Opportunities", href: "/economic-development/procurement" },
          { label: "Vendor Registration", href: "/forms/vendor-registration" },
          { label: "Community Investment", href: "/economic-development/community-investment" },
        ],
      },
      {
        heading: "Housing Programs",
        links: [
          { label: "Housing Programs Overview", href: "/housing" },
          { label: "Affordable Housing", href: "/housing/affordable" },
          { label: "Housing Stability", href: "/housing/stability" },
          { label: "Homeownership Readiness", href: "/housing/homeownership-readiness" },
          { label: "Rental Assistance Resources", href: "/housing/rental-resources" },
          { label: "Elder Housing", href: "/housing/elder" },
          { label: "Family Housing", href: "/housing/family" },
          { label: "Transitional Housing", href: "/housing/transitional" },
          { label: "Housing Applications", href: "/housing/apply" },
          { label: "Housing Support Request", href: "/forms/housing-support" },
        ],
      },
      {
        heading: "Housing Development",
        links: [
          { label: "Housing Development Initiative", href: "/housing/development" },
          { label: "Current Housing Projects", href: "/housing/projects/current" },
          { label: "Proposed Housing Projects", href: "/housing/projects/proposed" },
          { label: "Housing Project Registry", href: "/housing/registry" },
          { label: "Site Acquisition", href: "/housing/site-acquisition" },
          { label: "Predevelopment", href: "/housing/predevelopment" },
          { label: "Development Partnerships", href: "/housing/partnerships" },
          { label: "Municipal Partnerships", href: "/housing/municipal-partnerships" },
          { label: "Housing Funding", href: "/housing/funding" },
          { label: "Developer and Contractor Opportunities", href: "/housing/developer-opportunities" },
        ],
      },
      {
        heading: "Land & Property",
        links: [
          { label: "Land Program Overview", href: "/land" },
          { label: "Land Records", href: "/land/records" },
          { label: "Property Registry", href: "/land/property-registry" },
          { label: "Land Stewardship", href: "/land/stewardship" },
          { label: "Site Assessments", href: "/land/site-assessments" },
          { label: "Environmental Review", href: "/land/environmental-review" },
          { label: "Access and Easement Records", href: "/land/access-easements" },
          { label: "Historical Land Documentation", href: "/land/historical-records" },
          { label: "Property Notices", href: "/land/notices" },
          { label: "Public Land Records", href: "/land/public-records" },
        ],
      },
    ],
  },
  {
    label: "Treasury, Culture & Community",
    href: "/treasury",
    columns: [
      {
        heading: "Treasury",
        links: [
          { label: "Treasury and Grants Office", href: "/treasury" },
          { label: "Treasury Charter", href: "/treasury/charter" },
          { label: "Treasury Policies", href: "/treasury/policies" },
          { label: "Financial Procedures", href: "/treasury/procedures" },
          { label: "Annual Budget", href: "/treasury/budget" },
          { label: "Financial Reports", href: "/treasury/reports" },
          { label: "Internal Controls", href: "/treasury/internal-controls" },
          { label: "Procurement Policy", href: "/treasury/procurement" },
          { label: "Asset Management", href: "/treasury/assets" },
          { label: "Banking Resolutions", href: "/treasury/banking-resolutions" },
        ],
      },
      {
        heading: "Grants & Funding",
        links: [
          { label: "Grants Office", href: "/grants" },
          { label: "Grant Opportunities", href: "/grants/opportunities" },
          { label: "Grant Opportunity Register", href: "/grants/register" },
          { label: "Current Applications", href: "/grants/applications" },
          { label: "Awarded Grants", href: "/grants/awards" },
          { label: "Grant-Funded Programs", href: "/grants/programs" },
          { label: "Grant Compliance", href: "/grants/compliance" },
          { label: "Grant Reporting", href: "/grants/reporting" },
          { label: "Grant Closeout", href: "/grants/closeout" },
          { label: "Funding Partners", href: "/grants/partners" },
          { label: "Letters of Support", href: "/grants/letters-of-support" },
        ],
      },
      {
        heading: "Strategic Funding",
        links: [
          { label: "Strategic Funding Plan", href: "/funding/strategy" },
          { label: "Housing Funding", href: "/funding/housing" },
          { label: "Community Foundation Funding", href: "/funding/community-foundations" },
          { label: "Faith-Based Funding", href: "/funding/faith-based" },
          { label: "Cultural Preservation Funding", href: "/funding/cultural-preservation" },
          { label: "Capacity-Building Funding", href: "/funding/capacity-building" },
          { label: "Economic Development Funding", href: "/funding/economic-development" },
          { label: "Government Funding", href: "/funding/government" },
          { label: "Corporate Partnerships", href: "/funding/corporate" },
          { label: "Sponsorship Opportunities", href: "/funding/sponsorships" },
        ],
      },
      {
        heading: "Culture & Heritage",
        links: [
          { label: "Culture of Onegodia", href: "/culture" },
          { label: "Cultural Principles", href: "/culture/principles" },
          { label: "Community Traditions", href: "/culture/traditions" },
          { label: "Spiritual Heritage", href: "/culture/spiritual-heritage" },
          { label: "Language and Terminology", href: "/culture/language" },
          { label: "Cultural Education", href: "/culture/education" },
          { label: "Cultural Events", href: "/events/cultural" },
          { label: "Cultural Preservation", href: "/culture/preservation" },
          { label: "Cultural Resources", href: "/culture/resources" },
        ],
      },
      {
        heading: "History & Archives",
        links: [
          { label: "Historical Overview", href: "/history" },
          { label: "Institutional Timeline", href: "/history/timeline" },
          { label: "Founding Records", href: "/history/founding-records" },
          { label: "Important Dates", href: "/history/dates" },
          { label: "Community History", href: "/history/community" },
          { label: "Historical Documents", href: "/history/documents" },
          { label: "Oral Histories", href: "/history/oral-histories" },
          { label: "Remembrance Days", href: "/history/remembrance-days" },
          { label: "National Archives", href: "/archives" },
          { label: "Submit Historical Material", href: "/archives/submit" },
        ],
      },
      {
        heading: "Volunteer, Events & Support",
        links: [
          { label: "Volunteer With INO", href: "/volunteers" },
          { label: "Volunteer Opportunities", href: "/volunteers/opportunities" },
          { label: "Volunteer Application", href: "/volunteers/apply" },
          { label: "Volunteer Dashboard", href: "/volunteers/dashboard" },
          { label: "Service Hours", href: "/volunteers/hours" },
          { label: "Volunteer Certificates", href: "/certificates/volunteer" },
          { label: "Events Calendar", href: "/events" },
          { label: "Event Registration", href: "/events/register" },
          { label: "Support the Nation", href: "/support-ino" },
          { label: "Become a Partner", href: "/support-ino/partners" },
          { label: "Make a Contribution", href: "/support-ino/contribute" },
          { label: "Join a Committee", href: "/committees/join" },
        ],
      },
    ],
  },
  {
    label: "News, Records & Platform",
    href: "/news",
    columns: [
      {
        heading: "News & Media",
        links: [
          { label: "Latest News", href: "/news" },
          { label: "Nation Announcements", href: "/news/announcements" },
          { label: "Program Updates", href: "/news/programs" },
          { label: "Housing Updates", href: "/news/housing" },
          { label: "Grant Awards", href: "/news/grants" },
          { label: "Community News", href: "/news/community" },
          { label: "Member News", href: "/news/members" },
          { label: "Public Notices", href: "/notices" },
          { label: "News Archive", href: "/news/archive" },
        ],
      },
      {
        heading: "Media & Publications",
        links: [
          { label: "Media Center", href: "/media" },
          { label: "Press Releases", href: "/media/press-releases" },
          { label: "Press Coverage", href: "/media/coverage" },
          { label: "Official Statements", href: "/media/statements" },
          { label: "Photos", href: "/media/photos" },
          { label: "Videos", href: "/media/videos" },
          { label: "Audio", href: "/media/audio" },
          { label: "Brand Assets", href: "/media/brand-assets" },
          { label: "Official Publications", href: "/publications" },
          { label: "Annual Reports", href: "/publications/annual-reports" },
          { label: "Download Center", href: "/downloads" },
        ],
      },
      {
        heading: "Documents & Public Records",
        links: [
          { label: "Document Registry", href: "/documents" },
          { label: "Governance Documents", href: "/documents/governance" },
          { label: "Treasury Documents", href: "/documents/treasury" },
          { label: "Grant Documents", href: "/documents/grants" },
          { label: "Housing Documents", href: "/documents/housing" },
          { label: "Membership Documents", href: "/documents/membership" },
          { label: "Historical Documents", href: "/documents/history" },
          { label: "Reports and Publications", href: "/documents/reports" },
          { label: "Public Records Portal", href: "/records" },
          { label: "Records Request", href: "/forms/records-request" },
          { label: "Records Retention Schedule", href: "/records/retention" },
        ],
      },
      {
        heading: "Verification",
        links: [
          { label: "Verify a Certificate", href: "/verify/certificate" },
          { label: "Verify a Document", href: "/verify/document" },
          { label: "Verify a Membership Record", href: "/verify/membership" },
          { label: "Verify a Volunteer Record", href: "/verify/volunteer" },
          { label: "Verification Standards", href: "/verify/standards" },
          { label: "Report a Discrepancy", href: "/forms/report-discrepancy" },
        ],
      },
      {
        heading: "Forms & Applications",
        links: [
          { label: "Membership Application", href: "/forms/membership" },
          { label: "Citizenship Application", href: "/forms/citizenship" },
          { label: "Volunteer Application", href: "/forms/volunteer" },
          { label: "Program Application", href: "/forms/program" },
          { label: "Housing Interest Form", href: "/forms/housing-interest" },
          { label: "Community Assistance Request", href: "/forms/community-assistance" },
          { label: "Event Registration", href: "/forms/event-registration" },
          { label: "Vendor Registration", href: "/forms/vendor-registration" },
          { label: "Partnership Inquiry", href: "/forms/partnership" },
          { label: "Grant Partnership Request", href: "/forms/grant-partnership" },
          { label: "Media Request", href: "/forms/media-request" },
          { label: "Complaint or Concern Form", href: "/forms/complaint" },
          { label: "Record Correction Request", href: "/forms/record-correction" },
        ],
      },
      {
        heading: "INO Platform",
        links: [
          { label: "INO Platform", href: "/ino-platform" },
          { label: "About the INO Platform", href: "/ino-platform/about" },
          { label: "Platform Services", href: "/ino-platform/services" },
          { label: "Platform Modules", href: "/ino-platform/modules" },
          { label: "Platform Status", href: "/platform-status" },
          { label: "System Notices", href: "/ino-platform/notices" },
          { label: "Help Center", href: "/support" },
          { label: "Platform FAQ", href: "/ino-platform/faq" },
          { label: "Member Portal", href: "/dashboard" },
          { label: "Citizenship Portal", href: "/citizenship/portal" },
          { label: "Volunteer Portal", href: "/volunteers/dashboard" },
          { label: "Applicant Portal", href: "/applicant" },
          { label: "Housing Portal", href: "/housing/portal" },
          { label: "Vendor Portal", href: "/vendors/portal" },
          { label: "Staff Portal", href: "/staff" },
          { label: "Administrator Login", href: "/admin" },
          { label: "Department Dashboard", href: "/admin/departments" },
          { label: "Application Management", href: "/admin/applications" },
          { label: "Document Registry", href: "/admin/documents" },
          { label: "Reports", href: "/admin/reports" },
          { label: "Communications", href: "/admin/communications" },
          { label: "Compliance Calendar", href: "/admin/compliance" },
          { label: "System Status", href: "/admin/system" },
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
    heading: "Nation & Governance",
    links: [
      { label: "About INO", href: "/about" },
      { label: "Leadership", href: "/leadership" },
      { label: "Governance", href: "/governance" },
      { label: "Departments", href: "/departments" },
    ],
  },
  {
    heading: "Membership & Services",
    links: [
      { label: "Become a Member", href: "/membership/apply" },
      { label: "Member Portal", href: "/dashboard" },
      { label: "Programs", href: "/programs" },
      { label: "Housing", href: "/housing" },
    ],
  },
  {
    heading: "Records & Resources",
    links: [
      { label: "Document Library", href: "/documents" },
      { label: "Public Records", href: "/records" },
      { label: "Verification", href: "/verify" },
      { label: "News & Media", href: "/news" },
    ],
  },
  {
    heading: "Support & Platform",
    links: [
      { label: "Support INO", href: "/support-ino" },
      { label: "Volunteer", href: "/volunteers" },
      { label: "Events", href: "/events" },
      { label: "INO Platform", href: "/ino-platform" },
    ],
  },
];
