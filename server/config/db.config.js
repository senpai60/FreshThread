import mongoose from "mongoose";
import { ENV_CONFIG } from './env.config.js';

export const connectDB = async () => {
    // Add event listeners BEFORE connecting
    mongoose.connection.on('connecting', () => {
        console.log('🔄 Connecting to MongoDB...');
    });
    
    mongoose.connection.on('connected', () => {
        console.log('✅ MongoDB connected!');
    });
    
    mongoose.connection.on('error', (err) => {
        console.error('❌ MongoDB connection error:', err);
    });

    try {
        console.log('Attempting to connect to:', ENV_CONFIG.MONGODB_URI);
        await mongoose.connect(ENV_CONFIG.MONGODB_URI, {
            serverSelectionTimeoutMS: 5000 // Timeout after 5 seconds instead of hanging
        });
        console.log(`🥬MONGODB CONNECTED SUCCESSFULLY🥬`);
    } catch (err) {
        console.error('Connection failed:', err.message);
    }
}
