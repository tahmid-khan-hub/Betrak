

engine = create_engine(settings.DATABASE_URL)

SessionLocal = sessionmaker(autocommit=false, autoflush=false, bind=engine)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()