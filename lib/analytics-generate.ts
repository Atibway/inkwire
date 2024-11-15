import { PrismaClient, Prisma } from "@prisma/client";

const prisma = new PrismaClient();

interface MonthData {
  month: string;
  count: number;
}

// Accept a delegate model with a count method
export async function generateAnalyticsData(
  model: { count: (args: Prisma.subscriberCountArgs) => Promise<number> }
): Promise<{ last7Months: MonthData[] }> {
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
    const count = await model.count({
      where: {
        createdAt: {
          gte: startDate,
          lt: endDate,
        },
      },
    });

    last7Months.push({ month: monthYear, count });
  }
  return { last7Months };
}
