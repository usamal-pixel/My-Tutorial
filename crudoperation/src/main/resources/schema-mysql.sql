DROP TABLE IF EXISTS Tutorials;

CREATE TABLE Tutorials (
id bigint(20),
published  bit(1),
  title VARCHAR(100) NOT NULL,
  description VARCHAR(255) NOT NULL
);