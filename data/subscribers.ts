
import { db } from '@/lib/db'

export const subscribers = async ({
  newsLetterOwnerId,
}: {
  newsLetterOwnerId: string | undefined;
}) => {
  try {
    if (!newsLetterOwnerId) {
      console.warn("newsLetterOwnerId is undefined");
      return []; // Return an empty array if `newsLetterOwnerId` is undefined
    }

    const subscribers = await db.subscriber.findMany(
      {where:{
        newsLetterOwnerId: newsLetterOwnerId
      }}
    );

    return subscribers;
  } catch (error) {
    console.error("Error fetching subscribers:", error);
    return []; // Return an empty array if there's an error
  }
};
