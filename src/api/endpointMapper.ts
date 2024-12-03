export const getEndpointForRole = (role: string): string => {
    const endpoints: { [key: string]: string } = {
      Admin: "/api/Auth/signup/admin",
      Trainer: "/api/Auth/signup/trainer",
      Company: "/api/Auth/signup/company",
    };
  
    return endpoints[role] || "/api/Auth/signup/unknown";
  };
  