-- CreateTable
CREATE TABLE "Booking" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "subject" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "date" DATETIME NOT NULL,
    "starttime" DATETIME NOT NULL,
    "endtime" DATETIME NOT NULL,
    "room" TEXT NOT NULL,
    "description" TEXT NOT NULL
);
