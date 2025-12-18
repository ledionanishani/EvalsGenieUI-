from motor.motor_asyncio import AsyncIOMotorClient
from dotenv import load_dotenv
import os
import certifi

# Load environment variables
load_dotenv()

# MongoDB configuration
MONGODB_URI = os.getenv("MONGODB_URI", "mongodb://localhost:27017")
DATABASE_NAME = "evalsgenie"

# Global database client
client: AsyncIOMotorClient = None
database = None

async def connect_to_mongo():
    """Connect to MongoDB"""
    global client, database
    try:
        # Use certifi for SSL certificate verification
        client = AsyncIOMotorClient(
            MONGODB_URI,
            tls=True,
            tlsCAFile=certifi.where(),
            serverSelectionTimeoutMS=30000,
            connectTimeoutMS=30000
        )
        database = client[DATABASE_NAME]
        # Verify connection
        await client.admin.command('ping')
        print("✓ Connected to MongoDB")
    except Exception as e:
        print(f"✗ Failed to connect to MongoDB: {e}")
        print("Tip: If using MongoDB Atlas, ensure your IP is whitelisted (0.0.0.0/0 for Render).")
        raise

async def close_mongo_connection():
    """Close MongoDB connection"""
    global client
    if client:
        client.close()
        print("✓ Closed MongoDB connection")

def get_database():
    """Get database instance"""
    return database

# Collection helpers
def get_collection(collection_name: str):
    """Get a specific collection from the database"""
    if database is None:
        raise Exception("Database not initialized. Call connect_to_mongo() first.")
    return database[collection_name]