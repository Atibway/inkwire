"use server"
import { db } from "@/lib/db";

interface MonthData {
  month: string;
  count: number;
}

export const subscribersAnalytics = async () => {
  try {
    const last7Months: MonthData[] = [];
    const currentDate = new Date();
    
    for (let i = 6; i >= 0; i--) {
      // Calculate the start and end dates for each month
      const endDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - i + 1, 1);
      const startDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - i, 1);
  
      const monthYear = startDate.toLocaleString("default", {
        month: "short",
        year: "numeric",
      });
  
      // Count subscribers within the date range
      const count = await db.subscriber.count({
        where: {
          createdAt: {
            gte: startDate,
            lt: endDate,
          },
        },
      });
    
      last7Months.push({ month: monthYear, count });
    }
    return  {last7Months }
  } catch (error) {
    console.log(error);
     return{error:"Failed to generate subscriber analytics data"};
  }
};
