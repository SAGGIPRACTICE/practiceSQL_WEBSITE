export const questions = [
  {
    "id": "Q001",
    "level": "Beginner",
    "category": "SELECT",
    "question": "Which SQL clause identifies the source table for a query?",
    "options": [
      "SELECT",
      "FROM",
      "WHERE",
      "ORDER BY"
    ],
    "answer": "B",
    "explanation": "The FROM clause identifies the table or source used by the query.",
    "code": null,
    "tags": []
  },
  {
    "id": "Q002",
    "level": "Beginner",
    "category": "SELECT",
    "question": "What does SELECT DISTINCT primarily do?",
    "options": [
      "Sorts rows",
      "Removes duplicate result combinations",
      "Updates rows",
      "Creates a backup"
    ],
    "answer": "B",
    "explanation": "DISTINCT removes duplicate combinations of the selected values.",
    "code": null,
    "tags": []
  },
  {
    "id": "Q003",
    "level": "Beginner",
    "category": "SELECT",
    "question": "In SELECT 'FirstName' FROM Person.Person, what is 'FirstName' treated as?",
    "options": [
      "A column reference",
      "A literal string value",
      "A table name",
      "A database name"
    ],
    "answer": "B",
    "explanation": "Single quotes create a string literal; the query returns the text FirstName rather than reading the column.",
    "code": null,
    "tags": []
  },
  {
    "id": "Q004",
    "level": "Beginner",
    "category": "WHERE",
    "question": "Which clause filters rows before the final result is returned?",
    "options": [
      "WHERE",
      "GROUP BY",
      "ORDER BY",
      "FROM"
    ],
    "answer": "A",
    "explanation": "WHERE filters rows according to a condition.",
    "code": null,
    "tags": []
  },
  {
    "id": "Q005",
    "level": "Beginner",
    "category": "WHERE",
    "question": "Which operator means 'not equal' in SQL Server?",
    "options": [
      "=>",
      "<>",
      "=<",
      "=="
    ],
    "answer": "B",
    "explanation": "SQL Server supports <> and != for not equal.",
    "code": null,
    "tags": []
  },
  {
    "id": "Q006",
    "level": "Beginner",
    "category": "WHERE",
    "question": "Which condition selects rows where StateProvinceID is at least 30?",
    "options": [
      "StateProvinceID < 30",
      "StateProvinceID <= 30",
      "StateProvinceID >= 30",
      "StateProvinceID = 30 only"
    ],
    "answer": "C",
    "explanation": "The >= operator means greater than or equal to 30.",
    "code": null,
    "tags": []
  },
  {
    "id": "Q007",
    "level": "Beginner",
    "category": "WHERE",
    "question": "What does BETWEEN 40 AND 70 include?",
    "options": [
      "Only 40",
      "Only 70",
      "Values from 40 through 70, including endpoints",
      "Values strictly between 40 and 70"
    ],
    "answer": "C",
    "explanation": "BETWEEN includes both boundary values in the range.",
    "code": null,
    "tags": []
  },
  {
    "id": "Q008",
    "level": "Beginner",
    "category": "WHERE",
    "question": "What does IS NULL test for?",
    "options": [
      "Zero",
      "An empty string only",
      "A NULL value",
      "A duplicate value"
    ],
    "answer": "C",
    "explanation": "IS NULL identifies rows whose expression is NULL.",
    "code": null,
    "tags": []
  },
  {
    "id": "Q009",
    "level": "Beginner",
    "category": "WHERE",
    "question": "What does IS NOT NULL select?",
    "options": [
      "Only zeros",
      "Rows where the expression contains a value rather than NULL",
      "Only empty strings",
      "Duplicate rows"
    ],
    "answer": "B",
    "explanation": "IS NOT NULL keeps rows for which the expression is not NULL.",
    "code": null,
    "tags": []
  },
  {
    "id": "Q010",
    "level": "Beginner",
    "category": "WHERE",
    "question": "Which LIKE pattern matches text beginning with R?",
    "options": [
      "'%R'",
      "'R%'",
      "'%R%'",
      "'_R'"
    ],
    "answer": "B",
    "explanation": "A percent sign matches zero or more characters, so R% means starts with R.",
    "code": null,
    "tags": []
  },
  {
    "id": "Q011",
    "level": "Beginner",
    "category": "WHERE",
    "question": "Which LIKE pattern matches a word ending in Manager?",
    "options": [
      "'Manager%'",
      "'%Manager'",
      "'%Manager%'",
      "'_Manager'"
    ],
    "answer": "B",
    "explanation": "%Manager matches any preceding characters followed by Manager.",
    "code": null,
    "tags": []
  },
  {
    "id": "Q012",
    "level": "Beginner",
    "category": "WHERE",
    "question": "In LIKE patterns, what does underscore (_) represent?",
    "options": [
      "Zero or more characters",
      "Exactly one character",
      "A digit only",
      "A space only"
    ],
    "answer": "B",
    "explanation": "Underscore represents one character.",
    "code": null,
    "tags": []
  },
  {
    "id": "Q013",
    "level": "Beginner",
    "category": "ORDER BY",
    "question": "Which direction does ORDER BY ... ASC use?",
    "options": [
      "Highest to lowest",
      "Lowest to highest / A to Z",
      "Random order",
      "Newest to oldest only"
    ],
    "answer": "B",
    "explanation": "ASC sorts ascending.",
    "code": null,
    "tags": []
  },
  {
    "id": "Q014",
    "level": "Beginner",
    "category": "ORDER BY",
    "question": "Which keyword sorts from highest to lowest?",
    "options": [
      "ASC",
      "DESC",
      "TOP",
      "OFFSET"
    ],
    "answer": "B",
    "explanation": "DESC sorts descending.",
    "code": null,
    "tags": []
  },
  {
    "id": "Q015",
    "level": "Beginner",
    "category": "ORDER BY",
    "question": "What does ORDER BY StandardCost, ListPrice DESC mean?",
    "options": [
      "Both columns descending",
      "StandardCost ascending, then ListPrice descending within ties",
      "Both columns ascending",
      "ListPrice is ignored"
    ],
    "answer": "B",
    "explanation": "The first column defaults to ascending; ListPrice is explicitly descending.",
    "code": null,
    "tags": []
  },
  {
    "id": "Q016",
    "level": "Beginner",
    "category": "ORDER BY",
    "question": "What does TOP 5 return in a SELECT query?",
    "options": [
      "Exactly five columns",
      "At most five rows from the query result",
      "Five databases",
      "Five conditions"
    ],
    "answer": "B",
    "explanation": "TOP limits the number of returned rows.",
    "code": null,
    "tags": []
  },
  {
    "id": "Q017",
    "level": "Beginner",
    "category": "ORDER BY",
    "question": "What does OFFSET 5 ROWS do in a paged query?",
    "options": [
      "Skips five rows before returning later rows",
      "Returns exactly five rows",
      "Sorts five columns",
      "Deletes five rows"
    ],
    "answer": "A",
    "explanation": "OFFSET skips the specified number of rows after ordering.",
    "code": null,
    "tags": []
  },
  {
    "id": "Q018",
    "level": "Beginner",
    "category": "GROUP BY",
    "question": "What is GROUP BY commonly used with?",
    "options": [
      "Aggregate functions",
      "Backup files only",
      "Indexes only",
      "String literals only"
    ],
    "answer": "A",
    "explanation": "GROUP BY creates categories/groups over which aggregates can be calculated.",
    "code": null,
    "tags": []
  },
  {
    "id": "Q019",
    "level": "Beginner",
    "category": "FUNCTIONS",
    "question": "Which aggregate function adds numeric values?",
    "options": [
      "AVG()",
      "SUM()",
      "MAX()",
      "COUNT()"
    ],
    "answer": "B",
    "explanation": "SUM returns the total of applicable numeric values.",
    "code": null,
    "tags": []
  },
  {
    "id": "Q020",
    "level": "Beginner",
    "category": "FUNCTIONS",
    "question": "Which aggregate function calculates an average?",
    "options": [
      "AVG()",
      "SUM()",
      "MIN()",
      "LEN()"
    ],
    "answer": "A",
    "explanation": "AVG calculates the mean of applicable numeric values.",
    "code": null,
    "tags": []
  },
  {
    "id": "Q021",
    "level": "Beginner",
    "category": "FUNCTIONS",
    "question": "Which aggregate function finds the highest value?",
    "options": [
      "MAX()",
      "MIN()",
      "COUNT()",
      "ABS()"
    ],
    "answer": "A",
    "explanation": "MAX returns the highest applicable value.",
    "code": null,
    "tags": []
  },
  {
    "id": "Q022",
    "level": "Beginner",
    "category": "FUNCTIONS",
    "question": "Which aggregate function counts rows/values?",
    "options": [
      "COUNT()",
      "ROUND()",
      "CHARINDEX()",
      "YEAR()"
    ],
    "answer": "A",
    "explanation": "COUNT counts rows or non-NULL values depending on the expression.",
    "code": null,
    "tags": []
  },
  {
    "id": "Q023",
    "level": "Intermediate",
    "category": "WHERE",
    "question": "What does AND require when combining two conditions?",
    "options": [
      "At least one condition must be true",
      "Both conditions must be true",
      "Neither condition can be true",
      "Only the second condition is evaluated"
    ],
    "answer": "B",
    "explanation": "AND requires all connected conditions to be true.",
    "code": null,
    "tags": []
  },
  {
    "id": "Q024",
    "level": "Intermediate",
    "category": "WHERE",
    "question": "What does OR require?",
    "options": [
      "Both conditions must be true",
      "At least one connected condition must be true",
      "Neither condition can be true",
      "Only the first condition is evaluated"
    ],
    "answer": "B",
    "explanation": "OR is true when at least one connected condition is true.",
    "code": null,
    "tags": []
  },
  {
    "id": "Q025",
    "level": "Intermediate",
    "category": "WHERE",
    "question": "Why can parentheses change a WHERE result involving AND and OR?",
    "options": [
      "They make the query a backup",
      "They group a condition and control evaluation precedence",
      "They remove NULLs",
      "They sort the result"
    ],
    "answer": "B",
    "explanation": "Parentheses explicitly group conditions and can change which logical expression is evaluated first.",
    "code": null,
    "tags": []
  },
  {
    "id": "Q026",
    "level": "Intermediate",
    "category": "WHERE",
    "question": "Which condition excludes ProductID 4?",
    "options": [
      "WHERE ProductID = 4",
      "WHERE NOT ProductID = 4",
      "WHERE ProductID <> 4 only in all SQL dialects",
      "WHERE ProductID IS NULL"
    ],
    "answer": "B",
    "explanation": "NOT reverses the equality condition; ProductID 4 is excluded.",
    "code": null,
    "tags": []
  },
  {
    "id": "Q027",
    "level": "Intermediate",
    "category": "WHERE",
    "question": "Which is the compact equivalent of ProductID = 1 OR ProductID = 10 OR ProductID = 15 OR ProductID = 20?",
    "options": [
      "ProductID BETWEEN (1,10,15,20)",
      "ProductID IN (1,10,15,20)",
      "ProductID LIKE (1,10,15,20)",
      "ProductID ANY = 1,10,15,20"
    ],
    "answer": "B",
    "explanation": "IN tests membership in a list of values.",
    "code": null,
    "tags": []
  },
  {
    "id": "Q028",
    "level": "Intermediate",
    "category": "WHERE",
    "question": "What does NOT IN do?",
    "options": [
      "Selects only listed values",
      "Excludes values in the specified list",
      "Sorts listed values",
      "Groups listed values"
    ],
    "answer": "B",
    "explanation": "NOT IN keeps rows whose value is not in the list, subject to NULL semantics.",
    "code": null,
    "tags": []
  },
  {
    "id": "Q029",
    "level": "Intermediate",
    "category": "WHERE",
    "question": "Which pattern matches any occurrence of Manager within a job title?",
    "options": [
      "'Manager%'",
      "'%Manager'",
      "'%Manager%'",
      "'Manager_'"
    ],
    "answer": "C",
    "explanation": "Percent signs on both sides allow characters before and after Manager.",
    "code": null,
    "tags": []
  },
  {
    "id": "Q030",
    "level": "Intermediate",
    "category": "WHERE",
    "question": "What does LIKE 'L[I-N]%' mean for a product number?",
    "options": [
      "Starts with L, then a character from I through N, then anything",
      "Starts with I through N only",
      "Ends with I through N",
      "Contains only letters"
    ],
    "answer": "A",
    "explanation": "The bracket range represents one character from I through N.",
    "code": null,
    "tags": []
  },
  {
    "id": "Q031",
    "level": "Intermediate",
    "category": "WHERE",
    "question": "Which pattern negates the character range I-N at that position?",
    "options": [
      "'L[I-N]%'",
      "'L[^I-N]%'",
      "'L[!I-N]%' only",
      "'LNOT[I-N]%'"
    ],
    "answer": "B",
    "explanation": "In SQL Server LIKE patterns, ^ inside a bracket expression negates the class.",
    "code": null,
    "tags": []
  },
  {
    "id": "Q032",
    "level": "Intermediate",
    "category": "CONCAT",
    "question": "What does the + operator do in the notes' string-concatenation examples?",
    "options": [
      "Combines string expressions",
      "Adds rows",
      "Sorts strings",
      "Converts dates"
    ],
    "answer": "A",
    "explanation": "The notes use + to concatenate string expressions, such as name components.",
    "code": null,
    "tags": []
  },
  {
    "id": "Q033",
    "level": "Intermediate",
    "category": "CONCAT",
    "question": "Which function is designed to concatenate values while using a separator?",
    "options": [
      "CONCAT_WS()",
      "COUNT()",
      "DATEADD()",
      "PATINDEX()"
    ],
    "answer": "A",
    "explanation": "CONCAT_WS combines values using a supplied separator.",
    "code": null,
    "tags": []
  },
  {
    "id": "Q034",
    "level": "Intermediate",
    "category": "CONCAT",
    "question": "Which function concatenates values and handles NULL arguments more conveniently than +?",
    "options": [
      "CONCAT()",
      "SUM()",
      "EOMONTH()",
      "EXCEPT"
    ],
    "answer": "A",
    "explanation": "CONCAT combines supplied values into a string and is designed for string concatenation.",
    "code": null,
    "tags": []
  },
  {
    "id": "Q035",
    "level": "Intermediate",
    "category": "DATES",
    "question": "What does CAST(BirthDate AS datetime) do?",
    "options": [
      "Changes the expression to datetime type",
      "Filters old dates",
      "Adds time zones",
      "Sorts BirthDate"
    ],
    "answer": "A",
    "explanation": "CAST converts an expression to the specified data type.",
    "code": null,
    "tags": []
  },
  {
    "id": "Q036",
    "level": "Intermediate",
    "category": "DATES",
    "question": "What does CONVERT(DATE, SellStartDate) accomplish in the notes?",
    "options": [
      "Converts the value to DATE, removing the time portion",
      "Adds a day",
      "Counts dates",
      "Finds the month name"
    ],
    "answer": "A",
    "explanation": "The example converts SellStartDate to DATE, removing its time component.",
    "code": null,
    "tags": []
  },
  {
    "id": "Q037",
    "level": "Intermediate",
    "category": "DATES",
    "question": "What does DATEADD(month, 3, SellStartDate) do?",
    "options": [
      "Finds a three-month difference",
      "Adds three months to SellStartDate",
      "Subtracts three months",
      "Returns the month name"
    ],
    "answer": "B",
    "explanation": "DATEADD adds the specified number of date parts.",
    "code": null,
    "tags": []
  },
  {
    "id": "Q038",
    "level": "Intermediate",
    "category": "DATES",
    "question": "What does DATEDIFF(q, startdate, enddate) calculate?",
    "options": [
      "Quarter boundaries crossed between dates",
      "The exact number of hours",
      "A formatted date",
      "The last day of a month"
    ],
    "answer": "A",
    "explanation": "The notes describe DATEDIFF with q as calculating a quarter difference; DATEDIFF counts datepart boundaries crossed.",
    "code": null,
    "tags": []
  },
  {
    "id": "Q039",
    "level": "Intermediate",
    "category": "DATES",
    "question": "Which function extracts the month number from a date?",
    "options": [
      "MONTH()",
      "DATENAME()",
      "EOMONTH()",
      "DATEDIFF()"
    ],
    "answer": "A",
    "explanation": "MONTH returns the month component as a number.",
    "code": null,
    "tags": []
  },
  {
    "id": "Q040",
    "level": "Intermediate",
    "category": "DATES",
    "question": "Which function returns a month name such as September?",
    "options": [
      "MONTH()",
      "DATENAME(month, date)",
      "DAY()",
      "YEAR()"
    ],
    "answer": "B",
    "explanation": "DATENAME returns a character value for the requested date part.",
    "code": null,
    "tags": []
  },
  {
    "id": "Q041",
    "level": "Intermediate",
    "category": "DATES",
    "question": "What does EOMONTH(start_date) return?",
    "options": [
      "The first day of the month",
      "The last date of the month",
      "The number of months",
      "The current timestamp"
    ],
    "answer": "B",
    "explanation": "EOMONTH returns the last date of the specified month.",
    "code": null,
    "tags": []
  },
  {
    "id": "Q042",
    "level": "Intermediate",
    "category": "DATES",
    "question": "Which function returns the current SQL Server date and time as datetime?",
    "options": [
      "GETDATE()",
      "EOMONTH()",
      "YEAR()",
      "DATEPART()"
    ],
    "answer": "A",
    "explanation": "GETDATE returns the current system date and time as datetime.",
    "code": null,
    "tags": []
  },
  {
    "id": "Q043",
    "level": "Intermediate",
    "category": "DATES",
    "question": "Which current-time function includes a time-zone offset?",
    "options": [
      "GETDATE()",
      "SYSDATETIMEOFFSET()",
      "CURRENT_TIMESTAMP only",
      "DATEADD()"
    ],
    "answer": "B",
    "explanation": "SYSDATETIMEOFFSET returns date/time with the time-zone offset.",
    "code": null,
    "tags": []
  },
  {
    "id": "Q044",
    "level": "Intermediate",
    "category": "NULL",
    "question": "What does ISNULL(NULL, 'Abc') return?",
    "options": [
      "NULL",
      "Abc",
      "0",
      "An error"
    ],
    "answer": "B",
    "explanation": "ISNULL returns the replacement value when the first expression is NULL.",
    "code": null,
    "tags": []
  },
  {
    "id": "Q045",
    "level": "Intermediate",
    "category": "NULL",
    "question": "What does COALESCE(NULL, NULL, 'Welcome', 'SQL') return?",
    "options": [
      "NULL",
      "SQL",
      "Welcome",
      "NULLWelcome"
    ],
    "answer": "C",
    "explanation": "COALESCE returns the first non-NULL expression.",
    "code": null,
    "tags": []
  },
  {
    "id": "Q046",
    "level": "Intermediate",
    "category": "NULL",
    "question": "What does NULLIF(14, 12) return?",
    "options": [
      "NULL",
      "12",
      "14",
      "An error"
    ],
    "answer": "C",
    "explanation": "NULLIF returns NULL only when its two expressions are equal; 14 and 12 differ.",
    "code": null,
    "tags": []
  },
  {
    "id": "Q047",
    "level": "Intermediate",
    "category": "NULL",
    "question": "What does IIF(SafetyStockLevel > 500, 'High', 'Low') return when SafetyStockLevel is 600?",
    "options": [
      "Low",
      "High",
      "600",
      "NULL"
    ],
    "answer": "B",
    "explanation": "600 is greater than 500, so the true branch returns High.",
    "code": null,
    "tags": []
  },
  {
    "id": "Q048",
    "level": "Intermediate",
    "category": "NUMERICAL",
    "question": "What does ABS(-12345.45) return?",
    "options": [
      "-12345.45",
      "12345.45",
      "0",
      "12346"
    ],
    "answer": "B",
    "explanation": "ABS removes the negative sign from a negative number.",
    "code": null,
    "tags": []
  },
  {
    "id": "Q049",
    "level": "Intermediate",
    "category": "NUMERICAL",
    "question": "What does CEILING(12.2) return?",
    "options": [
      "12",
      "13",
      "12.2",
      "11"
    ],
    "answer": "B",
    "explanation": "CEILING rounds upward to the next integer.",
    "code": null,
    "tags": []
  },
  {
    "id": "Q050",
    "level": "Intermediate",
    "category": "NUMERICAL",
    "question": "What does FLOOR(12.9) return?",
    "options": [
      "13",
      "12",
      "12.9",
      "11"
    ],
    "answer": "B",
    "explanation": "FLOOR rounds downward to the lower integer.",
    "code": null,
    "tags": []
  },
  {
    "id": "Q051",
    "level": "Intermediate",
    "category": "NUMERICAL",
    "question": "What does ROUND(345.678, 2) return?",
    "options": [
      "345.67",
      "345.68",
      "346",
      "345.6"
    ],
    "answer": "B",
    "explanation": "Rounding to two decimal places makes 345.678 become 345.68.",
    "code": null,
    "tags": []
  },
  {
    "id": "Q052",
    "level": "Intermediate",
    "category": "STRING",
    "question": "What does LEN('Hello') return?",
    "options": [
      "4",
      "5",
      "6",
      "0"
    ],
    "answer": "B",
    "explanation": "LEN counts the five characters in Hello.",
    "code": null,
    "tags": []
  },
  {
    "id": "Q053",
    "level": "Intermediate",
    "category": "STRING",
    "question": "What does LEFT('Hello World', 5) return?",
    "options": [
      "World",
      "Hello",
      "Hello ",
      "H"
    ],
    "answer": "B",
    "explanation": "LEFT returns the requested number of characters from the left.",
    "code": null,
    "tags": []
  },
  {
    "id": "Q054",
    "level": "Intermediate",
    "category": "STRING",
    "question": "What does RIGHT('Hello World', 5) return?",
    "options": [
      "Hello",
      "World",
      "World ",
      "rld"
    ],
    "answer": "B",
    "explanation": "RIGHT returns the final five characters: World.",
    "code": null,
    "tags": []
  },
  {
    "id": "Q055",
    "level": "Intermediate",
    "category": "STRING",
    "question": "What does REVERSE('Hello') return?",
    "options": [
      "Hello",
      "olleH",
      "olleh",
      "Holle"
    ],
    "answer": "B",
    "explanation": "REVERSE reverses the character order.",
    "code": null,
    "tags": []
  },
  {
    "id": "Q056",
    "level": "Intermediate",
    "category": "STRING",
    "question": "What does CHARINDEX('D','DAD') return?",
    "options": [
      "0",
      "1",
      "2",
      "3"
    ],
    "answer": "B",
    "explanation": "The first D occurs at position 1.",
    "code": null,
    "tags": []
  },
  {
    "id": "Q057",
    "level": "Intermediate",
    "category": "STRING",
    "question": "What does CHARINDEX('D','DAD',2) return?",
    "options": [
      "1",
      "2",
      "3",
      "0"
    ],
    "answer": "C",
    "explanation": "Starting at position 2, the next D occurs at position 3.",
    "code": null,
    "tags": []
  },
  {
    "id": "Q058",
    "level": "Intermediate",
    "category": "STRING",
    "question": "What does PATINDEX('%ell%', 'Hello') return?",
    "options": [
      "1",
      "2",
      "3",
      "0"
    ],
    "answer": "B",
    "explanation": "The pattern ell begins at position 2 in Hello.",
    "code": null,
    "tags": []
  },
  {
    "id": "Q059",
    "level": "Intermediate",
    "category": "STRING",
    "question": "What does REPLACE('Hello World','World','SQL') return?",
    "options": [
      "Hello World",
      "Hello SQL",
      "SQL World",
      "Hello"
    ],
    "answer": "B",
    "explanation": "REPLACE substitutes World with SQL.",
    "code": null,
    "tags": []
  },
  {
    "id": "Q060",
    "level": "Intermediate",
    "category": "STRING",
    "question": "What does REPLICATE('Hi', 3) return?",
    "options": [
      "Hi3",
      "HiHiHi",
      "Hi Hi Hi",
      "3Hi"
    ],
    "answer": "B",
    "explanation": "REPLICATE repeats the string three times.",
    "code": null,
    "tags": []
  },
  {
    "id": "Q061",
    "level": "Intermediate",
    "category": "STRING",
    "question": "What does LOWER('HELLO') return?",
    "options": [
      "HELLO",
      "hello",
      "Hello",
      "hELLO"
    ],
    "answer": "B",
    "explanation": "LOWER converts letters to lowercase.",
    "code": null,
    "tags": []
  },
  {
    "id": "Q062",
    "level": "Intermediate",
    "category": "STRING",
    "question": "What does UPPER('hello') return?",
    "options": [
      "hello",
      "HELLO",
      "Hello",
      "HELLO()"
    ],
    "answer": "B",
    "explanation": "UPPER converts letters to uppercase.",
    "code": null,
    "tags": []
  },
  {
    "id": "Q063",
    "level": "Intermediate",
    "category": "STRING",
    "question": "What does TRIM(' Hello ') return?",
    "options": [
      "' Hello '",
      "'Hello'",
      "'Hello '",
      "' Hello'"
    ],
    "answer": "B",
    "explanation": "TRIM removes leading and trailing spaces.",
    "code": null,
    "tags": []
  },
  {
    "id": "Q064",
    "level": "Advanced",
    "category": "GROUP BY",
    "question": "Which query correctly calculates total Rate per PayFrequency?",
    "options": [
      "SELECT PayFrequency, SUM(Rate) FROM HumanResources.EmployeePayHistory GROUP BY PayFrequency",
      "SELECT PayFrequency, SUM(Rate) FROM HumanResources.EmployeePayHistory",
      "SELECT SUM(Rate) FROM HumanResources.EmployeePayHistory GROUP BY Rate",
      "SELECT * FROM HumanResources.EmployeePayHistory GROUP BY PayFrequency"
    ],
    "answer": "A",
    "explanation": "When PayFrequency is selected alongside SUM(Rate), PayFrequency must be grouped.",
    "code": null,
    "tags": []
  },
  {
    "id": "Q065",
    "level": "Advanced",
    "category": "GROUP BY",
    "question": "Why can SELECT * cause problems in a grouped query?",
    "options": [
      "GROUP BY returns categories, so non-aggregated selected columns must be grouped or aggregated",
      "SELECT * always disables indexes",
      "GROUP BY cannot use numbers",
      "SELECT * is only for backups"
    ],
    "answer": "A",
    "explanation": "Grouped queries cannot freely return unrelated non-aggregated columns.",
    "code": null,
    "tags": []
  },
  {
    "id": "Q066",
    "level": "Advanced",
    "category": "GROUP BY",
    "question": "Which query groups inventory by ProductID and Shelf?",
    "options": [
      "GROUP BY ProductID, Shelf",
      "GROUP BY Quantity",
      "GROUP BY ProductID only",
      "GROUP BY Shelf only"
    ],
    "answer": "A",
    "explanation": "The notes group by both ProductID and Shelf before summing Quantity.",
    "code": null,
    "tags": []
  },
  {
    "id": "Q067",
    "level": "Advanced",
    "category": "AGGREGATES",
    "question": "Which expression returns the maximum StandardCost for each MakeFlag?",
    "options": [
      "MAX(StandardCost) FROM Production.Product GROUP BY MakeFlag",
      "MAX(MakeFlag) FROM Production.Product GROUP BY StandardCost",
      "SUM(StandardCost) GROUP BY MakeFlag",
      "COUNT(StandardCost) GROUP BY MakeFlag"
    ],
    "answer": "A",
    "explanation": "MAX(StandardCost) grouped by MakeFlag returns the maximum cost within each group.",
    "code": null,
    "tags": []
  },
  {
    "id": "Q068",
    "level": "Advanced",
    "category": "AGGREGATES",
    "question": "What is the difference between SUM(StandardCost) and SUM(DISTINCT StandardCost)?",
    "options": [
      "DISTINCT removes repeated StandardCost values before summing",
      "SUM(DISTINCT) sorts values",
      "SUM(DISTINCT) counts rows",
      "There is no difference"
    ],
    "answer": "A",
    "explanation": "DISTINCT makes each distinct value contribute at most once.",
    "code": null,
    "tags": []
  },
  {
    "id": "Q069",
    "level": "Advanced",
    "category": "AGGREGATES",
    "question": "Which set contains only aggregate functions from the notes?",
    "options": [
      "COUNT, SUM, AVG, MIN, MAX",
      "UPPER, LOWER, LEN, YEAR, DAY",
      "LEFT, RIGHT, TRIM, REPLACE, REVERSE",
      "DATEADD, DATEDIFF, EOMONTH, YEAR, MONTH"
    ],
    "answer": "A",
    "explanation": "The notes identify COUNT, SUM, AVG, MIN and MAX as aggregate functions.",
    "code": null,
    "tags": []
  },
  {
    "id": "Q070",
    "level": "Advanced",
    "category": "AGGREGATES",
    "question": "Which set contains row-by-row/non-aggregate functions from the notes?",
    "options": [
      "COUNT, SUM, AVG",
      "UPPER, LOWER, LEN, ROUND, YEAR",
      "MIN, MAX, COUNT",
      "SUM, AVG, MAX"
    ],
    "answer": "B",
    "explanation": "These functions generally transform or calculate values for each input row.",
    "code": null,
    "tags": []
  },
  {
    "id": "Q071",
    "level": "Advanced",
    "category": "ORDER BY",
    "question": "What does ORDER BY 3 DESC, 4 mean in the example with four selected columns?",
    "options": [
      "Sort by the third selected expression descending, then the fourth ascending",
      "Sort by columns named 3 and 4",
      "Return rows 3 and 4",
      "Skip four rows"
    ],
    "answer": "A",
    "explanation": "Ordinal ORDER BY references the selected output positions; DESC applies to 3 and the fourth defaults ascending.",
    "code": null,
    "tags": []
  },
  {
    "id": "Q072",
    "level": "Advanced",
    "category": "ORDER BY",
    "question": "Why should ORDER BY appear before OFFSET/FETCH in the paging examples?",
    "options": [
      "Paging needs a defined row order",
      "OFFSET sorts automatically",
      "FETCH creates an index",
      "ORDER BY is optional for pagination semantics"
    ],
    "answer": "A",
    "explanation": "ORDER BY establishes which rows are skipped and fetched.",
    "code": null,
    "tags": []
  },
  {
    "id": "Q073",
    "level": "Advanced",
    "category": "SUBQUERY",
    "question": "What is a subquery?",
    "options": [
      "A query inside another query",
      "A backup file",
      "A table alias",
      "A database restore"
    ],
    "answer": "A",
    "explanation": "The notes define a subquery as a query inside another SQL query.",
    "code": null,
    "tags": []
  },
  {
    "id": "Q074",
    "level": "Advanced",
    "category": "SUBQUERY",
    "question": "In the salary example, what does the inner SELECT AVG(Rate) provide?",
    "options": [
      "The average rate used by the outer WHERE condition",
      "A table name",
      "A sort direction",
      "A backup path"
    ],
    "answer": "A",
    "explanation": "The inner query supplies the average rate that the outer query compares against.",
    "code": null,
    "tags": []
  },
  {
    "id": "Q075",
    "level": "Advanced",
    "category": "SUBQUERY",
    "question": "Which operator is used in the notes to compare BusinessEntityID against a subquery returning multiple IDs?",
    "options": [
      "IN",
      "LIKE",
      "BETWEEN",
      "ORDER BY"
    ],
    "answer": "A",
    "explanation": "IN checks whether the outer value is contained in the subquery's returned set.",
    "code": null,
    "tags": []
  },
  {
    "id": "Q076",
    "level": "Advanced",
    "category": "SUBQUERY",
    "question": "What does EXISTS check?",
    "options": [
      "Whether a subquery returns at least one row",
      "Whether every row is unique",
      "Whether a column is numeric",
      "Whether a date is valid"
    ],
    "answer": "A",
    "explanation": "EXISTS is true when the subquery finds at least one row.",
    "code": null,
    "tags": []
  },
  {
    "id": "Q077",
    "level": "Advanced",
    "category": "SUBQUERY",
    "question": "What is a correlated subquery doing in the PurchaseOrder example?",
    "options": [
      "Using the outer PurchaseOrderID to filter detail rows for the current order",
      "Sorting all orders randomly",
      "Replacing the outer query",
      "Creating a backup"
    ],
    "answer": "A",
    "explanation": "The inner query references the current outer order ID.",
    "code": null,
    "tags": []
  },
  {
    "id": "Q078",
    "level": "Advanced",
    "category": "SUBQUERY",
    "question": "What does ANY mean in a comparison such as column > ANY (subquery)?",
    "options": [
      "The comparison must hold for at least one returned value",
      "The comparison must hold for every returned value",
      "The column must be NULL",
      "The subquery must return one row only"
    ],
    "answer": "A",
    "explanation": "ANY succeeds if the comparison is true for at least one value.",
    "code": null,
    "tags": []
  },
  {
    "id": "Q079",
    "level": "Advanced",
    "category": "SUBQUERY",
    "question": "What does ALL mean in a comparison such as column > ALL (subquery)?",
    "options": [
      "The comparison must hold for every returned value",
      "The comparison must hold for one returned value",
      "The subquery is ignored",
      "Only NULL values are compared"
    ],
    "answer": "A",
    "explanation": "ALL requires the comparison to hold for every value returned by the subquery.",
    "code": null,
    "tags": []
  },
  {
    "id": "Q080",
    "level": "Advanced",
    "category": "SET OPERATORS",
    "question": "What is the key difference between UNION and UNION ALL?",
    "options": [
      "UNION removes duplicates; UNION ALL keeps them",
      "UNION keeps duplicates; UNION ALL removes them",
      "UNION joins columns horizontally",
      "They are identical"
    ],
    "answer": "A",
    "explanation": "The notes explicitly distinguish duplicate handling.",
    "code": null,
    "tags": []
  },
  {
    "id": "Q081",
    "level": "Advanced",
    "category": "SET OPERATORS",
    "question": "What must matching SELECT statements in a UNION have?",
    "options": [
      "The same number of columns and compatible data types",
      "The same table name",
      "The same aliases in every query",
      "The same WHERE clause"
    ],
    "answer": "A",
    "explanation": "Set operators require compatible column counts and data types.",
    "code": null,
    "tags": []
  },
  {
    "id": "Q082",
    "level": "Advanced",
    "category": "SET OPERATORS",
    "question": "Where does the ORDER BY for a UNION normally go?",
    "options": [
      "Once at the end of the combined result",
      "Inside every SELECT",
      "Before the first SELECT",
      "Only in the second SELECT"
    ],
    "answer": "A",
    "explanation": "The notes state ORDER BY is used once at the end for the combined result.",
    "code": null,
    "tags": []
  },
  {
    "id": "Q083",
    "level": "Advanced",
    "category": "SET OPERATORS",
    "question": "What does INTERSECT return?",
    "options": [
      "Rows common to both result sets, with duplicates removed",
      "All rows from the first query",
      "Rows only in the first query",
      "A Cartesian product"
    ],
    "answer": "A",
    "explanation": "INTERSECT returns the overlap of the two result sets and removes duplicates.",
    "code": null,
    "tags": []
  },
  {
    "id": "Q084",
    "level": "Advanced",
    "category": "SET OPERATORS",
    "question": "What does EXCEPT return conceptually?",
    "options": [
      "Rows from the first result that are not in the second result",
      "Rows common to both",
      "All rows from both",
      "Only duplicate rows"
    ],
    "answer": "A",
    "explanation": "EXCEPT performs set difference: first result minus the second.",
    "code": null,
    "tags": []
  },
  {
    "id": "Q085",
    "level": "Advanced",
    "category": "JOINS",
    "question": "What does a JOIN primarily combine?",
    "options": [
      "Columns from related rows in two or more tables",
      "Rows from unrelated backups",
      "Only duplicate rows",
      "Database files"
    ],
    "answer": "A",
    "explanation": "A JOIN combines columns based on a related condition.",
    "code": null,
    "tags": []
  },
  {
    "id": "Q086",
    "level": "Advanced",
    "category": "JOINS",
    "question": "What is the usual relationship used in an explicit JOIN?",
    "options": [
      "A primary/foreign-key relationship or another related condition",
      "Two unrelated text literals",
      "A backup path",
      "An ORDER BY position"
    ],
    "answer": "A",
    "explanation": "The notes describe joins as commonly using related key columns.",
    "code": null,
    "tags": []
  },
  {
    "id": "Q087",
    "level": "Advanced",
    "category": "JOINS",
    "question": "Which syntax represents an explicit join?",
    "options": [
      "FROM A JOIN B ON A.key = B.key",
      "FROM A, B ORDER BY key",
      "SELECT JOIN A B",
      "FROM A UNION B ON key"
    ],
    "answer": "A",
    "explanation": "Explicit JOIN syntax uses JOIN and ON.",
    "code": null,
    "tags": []
  },
  {
    "id": "Q088",
    "level": "Advanced",
    "category": "JOINS",
    "question": "What is an implicit join in the notes?",
    "options": [
      "Tables listed with commas in FROM and a join condition in WHERE",
      "A JOIN with ON",
      "A UNION ALL",
      "A subquery in SELECT"
    ],
    "answer": "A",
    "explanation": "The notes call the comma/WHERE style an implicit or old-style join.",
    "code": null,
    "tags": []
  },
  {
    "id": "Q089",
    "level": "Advanced",
    "category": "JOINS",
    "question": "What does UNION do compared with JOIN?",
    "options": [
      "UNION stacks compatible result rows; JOIN combines related columns",
      "UNION always joins columns",
      "JOIN removes duplicates across result sets",
      "They are identical"
    ],
    "answer": "A",
    "explanation": "The notes distinguish vertical stacking by UNION from horizontal column combination by JOIN.",
    "code": null,
    "tags": []
  },
  {
    "id": "Q090",
    "level": "Advanced",
    "category": "BACKUP",
    "question": "For the OLTP database described in the notes, which backup strategy is listed?",
    "options": [
      "Full + differential + frequent transaction log backups",
      "Only file export",
      "Snapshot only",
      "No backups"
    ],
    "answer": "A",
    "explanation": "The notes list full, differential and frequent log backups for OLTP.",
    "code": null,
    "tags": []
  },
  {
    "id": "Q091",
    "level": "Advanced",
    "category": "BACKUP",
    "question": "Why is transaction log backup described as very important for OLTP?",
    "options": [
      "OLTP has frequent transactions and commonly needs point-in-time recovery",
      "OLTP never changes",
      "OLTP is always read-only",
      "It makes SELECT faster"
    ],
    "answer": "A",
    "explanation": "The notes connect frequent transaction changes and point-in-time recovery with important log backups.",
    "code": null,
    "tags": []
  },
  {
    "id": "Q092",
    "level": "Advanced",
    "category": "BACKUP",
    "question": "Which workload is described as reporting and analytics?",
    "options": [
      "Data Warehouse",
      "OLTP",
      "Lightweight database",
      "Password database"
    ],
    "answer": "A",
    "explanation": "The source table identifies Data Warehouse as the reporting/analytics workload.",
    "code": null,
    "tags": []
  },
  {
    "id": "Q093",
    "level": "Advanced",
    "category": "BACKUP",
    "question": "Which workload is described as small/simple applications?",
    "options": [
      "Lightweight Database",
      "Data Warehouse",
      "OLTP",
      "Transaction Log"
    ],
    "answer": "A",
    "explanation": "The notes describe the lightweight database category as serving small/simple applications.",
    "code": null,
    "tags": []
  },
  {
    "id": "Q094",
    "level": "Expert",
    "category": "LOGIC",
    "question": "Given WHERE ProductID = 800 OR ProductID < 600 AND StandardCost > 50, which condition has precedence in the notes?",
    "options": [
      "AND binds before OR",
      "OR always binds before AND",
      "Neither has precedence",
      "ORDER BY changes it"
    ],
    "answer": "A",
    "explanation": "The notes state AND is preferred before OR unless parentheses change grouping.",
    "code": null,
    "tags": []
  },
  {
    "id": "Q095",
    "level": "Expert",
    "category": "LOGIC",
    "question": "What does WHERE (ProductID = 800 OR ProductID < 600) AND StandardCost > 50 enforce?",
    "options": [
      "The ProductID condition is grouped first, and StandardCost > 50 must also be true",
      "Only ProductID = 800 is allowed",
      "StandardCost is ignored",
      "The OR is removed"
    ],
    "answer": "A",
    "explanation": "Parentheses make the OR expression a unit that must then satisfy the AND condition.",
    "code": null,
    "tags": []
  },
  {
    "id": "Q096",
    "level": "Expert",
    "category": "DATES",
    "question": "Why can DATEDIFF(year, start, end) differ from a complete-years calculation?",
    "options": [
      "DATEDIFF counts year boundaries crossed",
      "DATEDIFF ignores dates",
      "DATEDIFF always returns days",
      "DATEDIFF rounds to months"
    ],
    "answer": "A",
    "explanation": "The notes explicitly warn that DATEDIFF(yyyy,...) counts year boundaries crossed.",
    "code": null,
    "tags": []
  },
  {
    "id": "Q097",
    "level": "Expert",
    "category": "DATES",
    "question": "Which expression selects products that have a SellEndDate before applying a quarter difference?",
    "options": [
      "WHERE SellEndDate IS NOT NULL",
      "WHERE SellEndDate = NULL",
      "WHERE SellEndDate <> NULL only",
      "WHERE SellEndDate IS NULL"
    ],
    "answer": "A",
    "explanation": "The source uses IS NOT NULL to restrict the calculation to products with a SellEndDate.",
    "code": null,
    "tags": []
  },
  {
    "id": "Q098",
    "level": "Expert",
    "category": "DATES",
    "question": "What does SYSDATETIME() provide compared with GETDATE() in the notes?",
    "options": [
      "Higher fractional-second precision",
      "A date without time",
      "Only a time-zone offset",
      "A month-end date"
    ],
    "answer": "A",
    "explanation": "SYSDATETIME returns the current date/time with higher fractional-second precision.",
    "code": null,
    "tags": []
  },
  {
    "id": "Q099",
    "level": "Expert",
    "category": "STRING",
    "question": "What does DATALENGTH() measure?",
    "options": [
      "Number of bytes used to store a value",
      "Number of characters only in every encoding",
      "Number of rows",
      "String position"
    ],
    "answer": "A",
    "explanation": "The notes define DATALENGTH as the number of bytes used to store a value.",
    "code": null,
    "tags": []
  },
  {
    "id": "Q100",
    "level": "Expert",
    "category": "STRING",
    "question": "What is the purpose of CHARINDEX(expressionToFind, expressionToSearch, start_location)?",
    "options": [
      "Find the starting position of a substring, optionally beginning at a specified location",
      "Replace a substring",
      "Return string length",
      "Format a date"
    ],
    "answer": "A",
    "explanation": "CHARINDEX searches for a character or substring and returns its starting position.",
    "code": null,
    "tags": []
  },
  {
    "id": "Q101",
    "level": "Expert",
    "category": "STRING",
    "question": "What does PATINDEX add compared with a simple literal search?",
    "options": [
      "It searches using a pattern",
      "It sums strings",
      "It returns a date",
      "It removes spaces"
    ],
    "answer": "A",
    "explanation": "PATINDEX searches for a specified pattern and returns its starting position.",
    "code": null,
    "tags": []
  },
  {
    "id": "Q102",
    "level": "Expert",
    "category": "STRING",
    "question": "Which function extracts a substring using a starting position and length?",
    "options": [
      "SUBSTRING()",
      "REVERSE()",
      "REPLICATE()",
      "STR()"
    ],
    "answer": "A",
    "explanation": "SUBSTRING takes a string, start position and length.",
    "code": null,
    "tags": []
  },
  {
    "id": "Q103",
    "level": "Expert",
    "category": "STRING",
    "question": "What does STR() do in the notes?",
    "options": [
      "Converts a numeric value into a character string",
      "Rounds every number upward",
      "Finds a substring",
      "Removes spaces"
    ],
    "answer": "A",
    "explanation": "STR converts numeric values to character strings.",
    "code": null,
    "tags": []
  },
  {
    "id": "Q104",
    "level": "Expert",
    "category": "NULL",
    "question": "Why can NULL require special handling in SQL predicates?",
    "options": [
      "NULL represents an unknown/missing value and is tested with IS NULL/IS NOT NULL",
      "NULL is the same as zero",
      "NULL is always an empty string",
      "NULL is always false"
    ],
    "answer": "A",
    "explanation": "The source demonstrates dedicated NULL predicates and replacement functions.",
    "code": null,
    "tags": []
  },
  {
    "id": "Q105",
    "level": "Expert",
    "category": "NULL",
    "question": "Which function returns the first non-NULL expression?",
    "options": [
      "COALESCE()",
      "NULLIF()",
      "IIF()",
      "ISDATE()"
    ],
    "answer": "A",
    "explanation": "COALESCE returns the first non-NULL expression.",
    "code": null,
    "tags": []
  },
  {
    "id": "Q106",
    "level": "Expert",
    "category": "NULL",
    "question": "What is the purpose of NULLIF(value1, value2)?",
    "options": [
      "Return NULL when the two expressions are equal; otherwise return the first",
      "Return the second value always",
      "Replace every NULL",
      "Convert a value to DATE"
    ],
    "answer": "A",
    "explanation": "That is the behavior shown in the notes.",
    "code": null,
    "tags": []
  },
  {
    "id": "Q107",
    "level": "Expert",
    "category": "NULL",
    "question": "What does CONVERT(DATE, SellStartDate) change that CAST/CONVERT examples illustrate?",
    "options": [
      "The data type representation of the expression",
      "The stored table schema",
      "The row count",
      "The database backup"
    ],
    "answer": "A",
    "explanation": "CAST and CONVERT transform the expression's data type.",
    "code": null,
    "tags": []
  },
  {
    "id": "Q108",
    "level": "Expert",
    "category": "SUBQUERY",
    "question": "Which nested-subquery path in the notes connects products to categories named like Bikes?",
    "options": [
      "Product → ProductSubcategory → ProductCategory",
      "Product → Person → Vendor",
      "Employee → Address → Product",
      "Order → State → Person"
    ],
    "answer": "A",
    "explanation": "The nested example filters ProductSubcategory through ProductCategory where Name LIKE '%Bikes%'.",
    "code": null,
    "tags": []
  },
  {
    "id": "Q109",
    "level": "Expert",
    "category": "SUBQUERY",
    "question": "Why does SELECT DISTINCT ProductSubCategoryID appear in the nested product example?",
    "options": [
      "It removes duplicate subcategory IDs from the final result",
      "It sorts IDs",
      "It changes IDs to text",
      "It joins categories"
    ],
    "answer": "A",
    "explanation": "DISTINCT prevents repeated values in the projected result.",
    "code": null,
    "tags": []
  },
  {
    "id": "Q110",
    "level": "Expert",
    "category": "SUBQUERY",
    "question": "In a scalar subquery comparison such as Rate > (SELECT AVG(Rate) ...), what should the inner query produce?",
    "options": [
      "A single value usable by the comparison",
      "An unrelated table",
      "A backup file",
      "A list of column names"
    ],
    "answer": "A",
    "explanation": "The scalar comparison expects the inner aggregate to provide one value.",
    "code": null,
    "tags": []
  },
  {
    "id": "Q111",
    "level": "Expert",
    "category": "SET OPERATORS",
    "question": "Why does UNION between an integer BusinessEntityID and a text FirstName fail?",
    "options": [
      "The corresponding columns have incompatible data types",
      "UNION requires identical table names",
      "UNION cannot use SELECT",
      "ORDER BY is missing"
    ],
    "answer": "A",
    "explanation": "The notes explicitly use this as an incompatible-data-type example.",
    "code": null,
    "tags": []
  },
  {
    "id": "Q112",
    "level": "Expert",
    "category": "SET OPERATORS",
    "question": "In a UNION, whose column names are used for the final result?",
    "options": [
      "The first SELECT",
      "The last SELECT",
      "Both equally",
      "Neither"
    ],
    "answer": "A",
    "explanation": "The notes state that final column names come from the first SELECT.",
    "code": null,
    "tags": []
  },
  {
    "id": "Q113",
    "level": "Expert",
    "category": "JOINS",
    "question": "Why can a comma join without a correct WHERE condition be dangerous?",
    "options": [
      "It can produce unintended combinations of rows",
      "It automatically removes duplicates",
      "It creates a backup",
      "It always returns one row"
    ],
    "answer": "A",
    "explanation": "The implicit join relies on a correct WHERE relationship; without it, unrelated combinations can result.",
    "code": null,
    "tags": []
  },
  {
    "id": "Q114",
    "level": "Expert",
    "category": "BACKUP",
    "question": "Which concern is emphasized for a Data Warehouse in the notes?",
    "options": [
      "Protect huge analytical datasets",
      "Never lose individual transactions",
      "Keep recovery trivial for SQLite",
      "Avoid all full backups"
    ],
    "answer": "A",
    "explanation": "The notes list protecting huge analytical datasets as the main concern for Data Warehouse.",
    "code": null,
    "tags": []
  },
  {
    "id": "Q115",
    "level": "Expert",
    "category": "BACKUP",
    "question": "Which recovery characteristic is commonly required for OLTP in the notes?",
    "options": [
      "Point-in-time recovery",
      "No recovery",
      "File-copy-only recovery",
      "Manual text export only"
    ],
    "answer": "A",
    "explanation": "The OLTP row lists point-in-time recovery as commonly required.",
    "code": null,
    "tags": []
  },
  {
    "id": "Q116",
    "level": "Expert",
    "category": "BACKUP",
    "question": "Which backup file is specifically named for the AdventureWorks OLTP database in the notes?",
    "options": [
      "AdventureWorks2025.bak",
      "AdventureWorks.csv",
      "AdventureWorks.sql",
      "AdventureWorks.zip"
    ],
    "answer": "A",
    "explanation": "The source names OLTP---AdventureWorks2025.bak.",
    "code": null,
    "tags": []
  },
  {
    "id": "Q117",
    "level": "Expert",
    "category": "BACKUP",
    "question": "Where do the notes say to store the downloaded backup file before importing it?",
    "options": [
      "C:\\Program Files\\Microsoft SQL Server\\MSSQL17.MSSQLSERVER\\MSSQL\\Backup",
      "C:\\Windows\\Temp",
      "C:\\SQL\\Data",
      "C:\\Users\\Public\\SQL"
    ],
    "answer": "A",
    "explanation": "The notes specify the SQL Server Backup directory shown in the setup steps.",
    "code": null,
    "tags": []
  },
  {
    "id": "Q118",
    "level": "Expert",
    "category": "PRACTICE",
    "question": "Which task best applies GROUP BY plus SUM to the source examples?",
    "options": [
      "Total Rate for each PayFrequency",
      "Reverse every FirstName",
      "Find current timestamp",
      "Remove duplicate rows only"
    ],
    "answer": "A",
    "explanation": "The notes show SUM(Rate) grouped by PayFrequency.",
    "code": null,
    "tags": []
  },
  {
    "id": "Q119",
    "level": "Expert",
    "category": "PRACTICE",
    "question": "Which task best applies ORDER BY plus TOP?",
    "options": [
      "Return the five most recently hired employees",
      "Replace NULL colors",
      "Calculate a string length",
      "Join two backups"
    ],
    "answer": "A",
    "explanation": "The notes show TOP 5 ordered by HireDate DESC.",
    "code": null,
    "tags": []
  },
  {
    "id": "Q120",
    "level": "Expert",
    "category": "PRACTICE",
    "question": "Which task best applies LIKE with a percent wildcard?",
    "options": [
      "Find job titles containing Manager",
      "Find only exact Manager",
      "Find dates between two years",
      "Calculate MAX(StandardCost)"
    ],
    "answer": "A",
    "explanation": "The notes demonstrate %Manager% for substring matching.",
    "code": null,
    "tags": []
  },
  {
    "id": "Q121",
    "level": "Expert",
    "category": "PRACTICE",
    "question": "Which task best applies IS NULL?",
    "options": [
      "Find products whose Color has no value",
      "Find products with Color='Red'",
      "Sort products by Color",
      "Count only duplicate colors"
    ],
    "answer": "A",
    "explanation": "The notes use WHERE Color IS NULL.",
    "code": null,
    "tags": []
  },
  {
    "id": "Q122",
    "level": "Expert",
    "category": "PRACTICE",
    "question": "Which task best applies DATEADD?",
    "options": [
      "Calculate a SellStartDate three months later",
      "Find common rows between tables",
      "Count product rows",
      "Remove duplicate product IDs"
    ],
    "answer": "A",
    "explanation": "The notes demonstrate DATEADD(m,3,SellStartDate).",
    "code": null,
    "tags": []
  },
  {
    "id": "Q123",
    "level": "Expert",
    "category": "PRACTICE",
    "question": "Which task best applies CHARINDEX?",
    "options": [
      "Find the starting position of 'Cr' in product names",
      "Replace 'Cr' with 'SQL'",
      "Count rows containing Cr",
      "Sort by Cr"
    ],
    "answer": "A",
    "explanation": "The notes use CHARINDEX('Cr', Name) to return the starting position.",
    "code": null,
    "tags": []
  },
  {
    "id": "Q124",
    "level": "Expert",
    "category": "PRACTICE",
    "question": "Which task best applies a correlated subquery?",
    "options": [
      "Calculate total OrderQty from details for each PurchaseOrderID",
      "Sort every person",
      "Find a literal string",
      "Create a backup file"
    ],
    "answer": "A",
    "explanation": "The PurchaseOrder example references the outer PurchaseOrderID from the detail subquery.",
    "code": null,
    "tags": []
  },
  {
    "id": "Q125",
    "level": "Expert",
    "category": "PRACTICE",
    "question": "Which task best applies INTERSECT?",
    "options": [
      "Find IDs appearing in both result sets",
      "Stack every row including duplicates",
      "Find rows only in the first set",
      "Join two tables by a key"
    ],
    "answer": "A",
    "explanation": "INTERSECT returns the common rows between result sets.",
    "code": null,
    "tags": []
  },
  {
    "id": "Q126",
    "level": "Expert",
    "category": "PRACTICE",
    "question": "Which task best applies EXCEPT?",
    "options": [
      "Find IDs in the first query that are absent from the second",
      "Find common IDs",
      "Concatenate names",
      "Sort by ID"
    ],
    "answer": "A",
    "explanation": "EXCEPT returns the set difference from the first result.",
    "code": null,
    "tags": []
  },
  {
    "id": "Q127",
    "level": "Expert",
    "category": "PRACTICE",
    "question": "Which task best applies CONCAT_WS?",
    "options": [
      "Build a value such as adventure-works.com using '.' as separator",
      "Calculate average cost",
      "Filter NULLs",
      "Find date boundaries"
    ],
    "answer": "A",
    "explanation": "The notes use CONCAT_WS('.', 'adventure-works', 'com').",
    "code": null,
    "tags": []
  },
  {
    "id": "Q128",
    "level": "Expert",
    "category": "PRACTICE",
    "question": "Which task best applies IIF?",
    "options": [
      "Label stock as High when SafetyStockLevel > 500, otherwise Low",
      "Find duplicate rows",
      "Sort prices",
      "Find a month end"
    ],
    "answer": "A",
    "explanation": "The notes provide this IIF pattern for stock status.",
    "code": null,
    "tags": []
  },
  {
    "id": "Q129",
    "level": "Expert",
    "category": "PRACTICE",
    "question": "Which task best applies COALESCE?",
    "options": [
      "Display MiddleName when present, otherwise N/A",
      "Round StandardCost",
      "Find a substring",
      "Return the maximum rate"
    ],
    "answer": "A",
    "explanation": "The notes use COALESCE(MiddleName, 'N/A').",
    "code": null,
    "tags": []
  },
  {
    "id": "Q130",
    "level": "Advanced",
    "category": "SELECT",
    "question": "Which statement correctly selects three named columns from Person.Person?",
    "options": [
      "SELECT BusinessEntityID, FirstName, LastName FROM Person.Person",
      "SELECT BusinessEntityID AND FirstName AND LastName FROM Person.Person",
      "GET BusinessEntityID, FirstName, LastName FROM Person.Person",
      "SELECT FROM Person.Person BusinessEntityID, FirstName, LastName"
    ],
    "answer": "A",
    "explanation": "The SELECT list contains comma-separated column names followed by FROM and the table.",
    "code": null,
    "tags": []
  },
  {
    "id": "Q131",
    "level": "Intermediate",
    "category": "ARITHMETIC",
    "question": "Which expression filters products where ListPrice exceeds StandardCost by more than 10?",
    "options": [
      "WHERE ListPrice - StandardCost > 10",
      "WHERE ListPrice + StandardCost > 10",
      "WHERE ListPrice / StandardCost > 10",
      "WHERE ListPrice * StandardCost > 10"
    ],
    "answer": "A",
    "explanation": "Subtraction gives the difference between ListPrice and StandardCost.",
    "code": null,
    "tags": []
  },
  {
    "id": "Q132",
    "level": "Intermediate",
    "category": "ARITHMETIC",
    "question": "Why does StandardCost <> 0 matter in the division example?",
    "options": [
      "It prevents division by zero",
      "It removes duplicates",
      "It converts StandardCost to text",
      "It sorts costs"
    ],
    "answer": "A",
    "explanation": "A nonzero denominator is required for safe division.",
    "code": null,
    "tags": []
  },
  {
    "id": "Q133",
    "level": "Advanced",
    "category": "GROUP BY",
    "question": "What does GROUP BY ProductID, Shelf create in the inventory example?",
    "options": [
      "One group for each ProductID/Shelf combination",
      "One group for each Quantity only",
      "One group for the whole table",
      "A sorted list without grouping"
    ],
    "answer": "A",
    "explanation": "Grouping by two columns creates groups for each combination.",
    "code": null,
    "tags": []
  },
  {
    "id": "Q134",
    "level": "Advanced",
    "category": "STRING",
    "question": "What does RIGHT('Hello World', 5) demonstrate?",
    "options": [
      "Extracting a fixed number of characters from the right",
      "Finding a substring position",
      "Removing spaces",
      "Replacing text"
    ],
    "answer": "A",
    "explanation": "RIGHT extracts characters from the end of a string.",
    "code": null,
    "tags": []
  },
  {
    "id": "Q135",
    "level": "Advanced",
    "category": "DATES",
    "question": "Which datepart code in the notes represents minutes for DATEADD/DATEDIFF?",
    "options": [
      "n",
      "m",
      "q",
      "hh"
    ],
    "answer": "A",
    "explanation": "The datepart list maps n to minute; m is month.",
    "code": null,
    "tags": []
  },
  {
    "id": "Q136",
    "level": "Advanced",
    "category": "DATES",
    "question": "Which datepart code represents milliseconds?",
    "options": [
      "ms",
      "s",
      "n",
      "hh"
    ],
    "answer": "A",
    "explanation": "The notes list ms for milliseconds.",
    "code": null,
    "tags": []
  },
  {
    "id": "Q137",
    "level": "Expert",
    "category": "SET OPERATORS",
    "question": "If two UNION queries each return one compatible column, can they have different source tables?",
    "options": [
      "Yes, the source tables can differ if the result columns are compatible",
      "No, they must use the same table",
      "Only if both tables have the same name",
      "Only with JOIN"
    ],
    "answer": "A",
    "explanation": "Set operators combine compatible result sets; the source tables need not be identical.",
    "code": null,
    "tags": []
  },
  {
    "id": "Q138",
    "level": "Expert",
    "category": "ORDER BY",
    "question": "If ORDER BY StandardCost ASC, ListPrice DESC is used, when is ListPrice used to break ties?",
    "options": [
      "When StandardCost values are equal",
      "Always before StandardCost",
      "Only when StandardCost is NULL",
      "Never"
    ],
    "answer": "A",
    "explanation": "The second sort key matters when the first key ties.",
    "code": null,
    "tags": []
  },
  {
    "id": "Q139",
    "level": "Expert",
    "category": "BACKUP",
    "question": "Which database category in the source has the least frequent backup requirement?",
    "options": [
      "Lightweight Database",
      "OLTP",
      "Data Warehouse",
      "All are identical"
    ],
    "answer": "A",
    "explanation": "The table lists less frequent backups for the lightweight database category.",
    "code": null,
    "tags": []
  },
  {
    "category": "SELECT",
    "level": "Beginner",
    "question": "Which SQL keyword begins a query that retrieves rows?",
    "answer": "A",
    "explanation": "SELECT is used to retrieve data from one or more sources.",
    "id": "Q140",
    "options": [
      "SELECT",
      "UPDATE",
      "DELETE",
      "INSERT"
    ],
    "code": null,
    "tags": [
      "select"
    ]
  },
  {
    "category": "SELECT",
    "level": "Beginner",
    "question": "A SQL learner asks: Which SQL keyword begins a query that retrieves rows?",
    "answer": "D",
    "explanation": "SELECT is used to retrieve data from one or more sources.",
    "id": "Q141",
    "options": [
      "UPDATE",
      "DELETE",
      "INSERT",
      "SELECT"
    ],
    "code": null,
    "tags": [
      "select"
    ]
  },
  {
    "category": "SELECT",
    "level": "Beginner",
    "question": "What does SELECT * request from a table?",
    "answer": "B",
    "explanation": "The asterisk requests all columns available from the selected source.",
    "id": "Q142",
    "options": [
      "Only non-NULL columns",
      "All columns",
      "Only the primary key",
      "Only numeric columns"
    ],
    "code": null,
    "tags": [
      "select"
    ]
  },
  {
    "category": "SELECT",
    "level": "Beginner",
    "question": "A SQL learner asks: What does SELECT * request from a table?",
    "answer": "A",
    "explanation": "The asterisk requests all columns available from the selected source.",
    "id": "Q143",
    "options": [
      "All columns",
      "Only the primary key",
      "Only numeric columns",
      "Only non-NULL columns"
    ],
    "code": null,
    "tags": [
      "select"
    ]
  },
  {
    "category": "SELECT",
    "level": "Beginner",
    "question": "Which clause identifies the table or source being queried?",
    "answer": "C",
    "explanation": "FROM identifies the source table or other row source.",
    "id": "Q144",
    "options": [
      "ORDER BY",
      "GROUP BY",
      "FROM",
      "WHERE"
    ],
    "code": null,
    "tags": [
      "select"
    ]
  },
  {
    "category": "SELECT",
    "level": "Beginner",
    "question": "A SQL learner asks: Which clause identifies the table or source being queried?",
    "answer": "B",
    "explanation": "FROM identifies the source table or other row source.",
    "id": "Q145",
    "options": [
      "GROUP BY",
      "FROM",
      "WHERE",
      "ORDER BY"
    ],
    "code": null,
    "tags": [
      "select"
    ]
  },
  {
    "category": "SELECT",
    "level": "Beginner",
    "question": "What is SELECT FirstName, LastName FROM Person.Person; designed to return?",
    "answer": "D",
    "explanation": "The SELECT list specifies the columns returned for each row.",
    "id": "Q146",
    "options": [
      "One total count",
      "Only duplicate rows",
      "A backup file",
      "Two selected columns for each qualifying row"
    ],
    "code": null,
    "tags": [
      "select"
    ]
  },
  {
    "category": "SELECT",
    "level": "Beginner",
    "question": "A SQL learner asks: What is SELECT FirstName, LastName FROM Person.Person; designed to return?",
    "answer": "C",
    "explanation": "The SELECT list specifies the columns returned for each row.",
    "id": "Q147",
    "options": [
      "Only duplicate rows",
      "A backup file",
      "Two selected columns for each qualifying row",
      "One total count"
    ],
    "code": null,
    "tags": [
      "select"
    ]
  },
  {
    "category": "SELECT",
    "level": "Beginner",
    "question": "What does SELECT DISTINCT FirstName do?",
    "answer": "A",
    "explanation": "DISTINCT removes duplicate result combinations.",
    "id": "Q148",
    "options": [
      "Returns unique FirstName values",
      "Sorts FirstName alphabetically",
      "Updates duplicate names",
      "Returns only NULL names"
    ],
    "code": null,
    "tags": [
      "select"
    ]
  },
  {
    "category": "SELECT",
    "level": "Beginner",
    "question": "A SQL learner asks: What does SELECT DISTINCT FirstName do?",
    "answer": "D",
    "explanation": "DISTINCT removes duplicate result combinations.",
    "id": "Q149",
    "options": [
      "Sorts FirstName alphabetically",
      "Updates duplicate names",
      "Returns only NULL names",
      "Returns unique FirstName values"
    ],
    "code": null,
    "tags": [
      "select"
    ]
  },
  {
    "category": "SELECT",
    "level": "Intermediate",
    "question": "In SELECT 10 + 5 AS TotalValue, what is TotalValue?",
    "answer": "B",
    "explanation": "A SELECT expression can calculate a value and assign it an alias with AS.",
    "id": "Q150",
    "options": [
      "10",
      "15",
      "105",
      "5"
    ],
    "code": null,
    "tags": [
      "select"
    ]
  },
  {
    "category": "SELECT",
    "level": "Intermediate",
    "question": "A SQL learner asks: In SELECT 10 + 5 AS TotalValue, what is TotalValue?",
    "answer": "A",
    "explanation": "A SELECT expression can calculate a value and assign it an alias with AS.",
    "id": "Q151",
    "options": [
      "15",
      "105",
      "5",
      "10"
    ],
    "code": null,
    "tags": [
      "select"
    ]
  },
  {
    "category": "SELECT",
    "level": "Intermediate",
    "question": "Why can multiple SELECT statements be executed in one script?",
    "answer": "C",
    "explanation": "A script can contain multiple statements, normally separated by statement terminators or batch boundaries.",
    "id": "Q152",
    "options": [
      "SELECT statements automatically become one join",
      "Each SELECT must use the same table",
      "Each statement is a separate SQL statement",
      "Only one SELECT is allowed per script"
    ],
    "code": null,
    "tags": [
      "select"
    ]
  },
  {
    "category": "SELECT",
    "level": "Intermediate",
    "question": "A SQL learner asks: Why can multiple SELECT statements be executed in one script?",
    "answer": "B",
    "explanation": "A script can contain multiple statements, normally separated by statement terminators or batch boundaries.",
    "id": "Q153",
    "options": [
      "Each SELECT must use the same table",
      "Each statement is a separate SQL statement",
      "Only one SELECT is allowed per script",
      "SELECT statements automatically become one join"
    ],
    "code": null,
    "tags": [
      "select"
    ]
  },
  {
    "category": "WHERE",
    "level": "Beginner",
    "question": "Which clause filters rows according to a condition?",
    "answer": "D",
    "explanation": "WHERE applies row-level filtering conditions.",
    "id": "Q154",
    "options": [
      "SELECT",
      "FROM",
      "ORDER BY",
      "WHERE"
    ],
    "code": null,
    "tags": [
      "where"
    ]
  },
  {
    "category": "WHERE",
    "level": "Beginner",
    "question": "A SQL learner asks: Which clause filters rows according to a condition?",
    "answer": "C",
    "explanation": "WHERE applies row-level filtering conditions.",
    "id": "Q155",
    "options": [
      "FROM",
      "ORDER BY",
      "WHERE",
      "SELECT"
    ],
    "code": null,
    "tags": [
      "where"
    ]
  },
  {
    "category": "WHERE",
    "level": "Beginner",
    "question": "Which SQL Server operator means not equal?",
    "answer": "A",
    "explanation": "SQL Server supports <> and != as not-equal operators.",
    "id": "Q156",
    "options": [
      "<>",
      "=>",
      "=<",
      "=="
    ],
    "code": null,
    "tags": [
      "where"
    ]
  },
  {
    "category": "WHERE",
    "level": "Beginner",
    "question": "A SQL learner asks: Which SQL Server operator means not equal?",
    "answer": "D",
    "explanation": "SQL Server supports <> and != as not-equal operators.",
    "id": "Q157",
    "options": [
      "=>",
      "=<",
      "==",
      "<>"
    ],
    "code": null,
    "tags": [
      "where"
    ]
  },
  {
    "category": "WHERE",
    "level": "Beginner",
    "question": "What does BETWEEN 40 AND 70 include?",
    "answer": "B",
    "explanation": "BETWEEN is inclusive of both boundary values.",
    "id": "Q158",
    "options": [
      "Values below 40 or above 70",
      "40 through 70, including both endpoints",
      "Only 40 and 70",
      "Values strictly between 40 and 70"
    ],
    "code": null,
    "tags": [
      "where"
    ]
  },
  {
    "category": "WHERE",
    "level": "Beginner",
    "question": "A SQL learner asks: What does BETWEEN 40 AND 70 include?",
    "answer": "A",
    "explanation": "BETWEEN is inclusive of both boundary values.",
    "id": "Q159",
    "options": [
      "40 through 70, including both endpoints",
      "Only 40 and 70",
      "Values strictly between 40 and 70",
      "Values below 40 or above 70"
    ],
    "code": null,
    "tags": [
      "where"
    ]
  },
  {
    "category": "WHERE",
    "level": "Beginner",
    "question": "Which predicate checks whether a value is NULL?",
    "answer": "C",
    "explanation": "NULL is tested with IS NULL rather than the equality operator.",
    "id": "Q160",
    "options": [
      "NULL = TRUE",
      "IS EMPTY",
      "IS NULL",
      "= NULL"
    ],
    "code": null,
    "tags": [
      "where"
    ]
  },
  {
    "category": "WHERE",
    "level": "Beginner",
    "question": "A SQL learner asks: Which predicate checks whether a value is NULL?",
    "answer": "B",
    "explanation": "NULL is tested with IS NULL rather than the equality operator.",
    "id": "Q161",
    "options": [
      "IS EMPTY",
      "IS NULL",
      "= NULL",
      "NULL = TRUE"
    ],
    "code": null,
    "tags": [
      "where"
    ]
  },
  {
    "category": "WHERE",
    "level": "Beginner",
    "question": "Which LIKE pattern matches text that starts with R?",
    "answer": "D",
    "explanation": "The percent wildcard represents zero or more characters after R.",
    "id": "Q162",
    "options": [
      "%R",
      "%R%",
      "_R",
      "R%"
    ],
    "code": null,
    "tags": [
      "where"
    ]
  },
  {
    "category": "WHERE",
    "level": "Beginner",
    "question": "A SQL learner asks: Which LIKE pattern matches text that starts with R?",
    "answer": "C",
    "explanation": "The percent wildcard represents zero or more characters after R.",
    "id": "Q163",
    "options": [
      "%R%",
      "_R",
      "R%",
      "%R"
    ],
    "code": null,
    "tags": [
      "where"
    ]
  },
  {
    "category": "WHERE",
    "level": "Beginner",
    "question": "Which LIKE pattern matches text ending in Manager?",
    "answer": "A",
    "explanation": "Placing % before Manager allows any preceding characters while requiring the text to end with Manager.",
    "id": "Q164",
    "options": [
      "%Manager",
      "Manager%",
      "%Manager%",
      "_Manager"
    ],
    "code": null,
    "tags": [
      "where"
    ]
  },
  {
    "category": "WHERE",
    "level": "Beginner",
    "question": "A SQL learner asks: Which LIKE pattern matches text ending in Manager?",
    "answer": "D",
    "explanation": "Placing % before Manager allows any preceding characters while requiring the text to end with Manager.",
    "id": "Q165",
    "options": [
      "Manager%",
      "%Manager%",
      "_Manager",
      "%Manager"
    ],
    "code": null,
    "tags": [
      "where"
    ]
  },
  {
    "category": "WHERE",
    "level": "Intermediate",
    "question": "What does the underscore wildcard represent in a LIKE pattern?",
    "answer": "B",
    "explanation": "Underscore matches exactly one character.",
    "id": "Q166",
    "options": [
      "A space only",
      "Exactly one character",
      "Zero or more characters",
      "A digit only"
    ],
    "code": null,
    "tags": [
      "where"
    ]
  },
  {
    "category": "WHERE",
    "level": "Intermediate",
    "question": "A SQL learner asks: What does the underscore wildcard represent in a LIKE pattern?",
    "answer": "A",
    "explanation": "Underscore matches exactly one character.",
    "id": "Q167",
    "options": [
      "Exactly one character",
      "Zero or more characters",
      "A digit only",
      "A space only"
    ],
    "code": null,
    "tags": [
      "where"
    ]
  },
  {
    "category": "ORDER BY",
    "level": "Beginner",
    "question": "What is the default sort direction for ORDER BY?",
    "answer": "C",
    "explanation": "Ascending order is the default when ASC or DESC is not specified.",
    "id": "Q168",
    "options": [
      "Random",
      "Grouped",
      "Ascending",
      "Descending"
    ],
    "code": null,
    "tags": [
      "order-by"
    ]
  },
  {
    "category": "ORDER BY",
    "level": "Beginner",
    "question": "A SQL learner asks: What is the default sort direction for ORDER BY?",
    "answer": "B",
    "explanation": "Ascending order is the default when ASC or DESC is not specified.",
    "id": "Q169",
    "options": [
      "Grouped",
      "Ascending",
      "Descending",
      "Random"
    ],
    "code": null,
    "tags": [
      "order-by"
    ]
  },
  {
    "category": "ORDER BY",
    "level": "Beginner",
    "question": "Which keyword requests descending order?",
    "answer": "D",
    "explanation": "DESC sorts values from higher to lower for typical numeric ordering.",
    "id": "Q170",
    "options": [
      "DOWN",
      "REVERSE",
      "HIGH",
      "DESC"
    ],
    "code": null,
    "tags": [
      "order-by"
    ]
  },
  {
    "category": "ORDER BY",
    "level": "Beginner",
    "question": "A SQL learner asks: Which keyword requests descending order?",
    "answer": "C",
    "explanation": "DESC sorts values from higher to lower for typical numeric ordering.",
    "id": "Q171",
    "options": [
      "REVERSE",
      "HIGH",
      "DESC",
      "DOWN"
    ],
    "code": null,
    "tags": [
      "order-by"
    ]
  },
  {
    "category": "ORDER BY",
    "level": "Beginner",
    "question": "Which clause sorts the final result set?",
    "answer": "A",
    "explanation": "ORDER BY controls the presentation order of returned rows.",
    "id": "Q172",
    "options": [
      "ORDER BY",
      "GROUP BY",
      "WHERE",
      "FROM"
    ],
    "code": null,
    "tags": [
      "order-by"
    ]
  },
  {
    "category": "ORDER BY",
    "level": "Beginner",
    "question": "A SQL learner asks: Which clause sorts the final result set?",
    "answer": "D",
    "explanation": "ORDER BY controls the presentation order of returned rows.",
    "id": "Q173",
    "options": [
      "GROUP BY",
      "WHERE",
      "FROM",
      "ORDER BY"
    ],
    "code": null,
    "tags": [
      "order-by"
    ]
  },
  {
    "category": "ORDER BY",
    "level": "Intermediate",
    "question": "Can ORDER BY sort by more than one expression?",
    "answer": "B",
    "explanation": "Multiple expressions can be supplied to define primary and secondary sort order.",
    "id": "Q174",
    "options": [
      "Only for numeric columns",
      "Yes",
      "No, only one expression is allowed",
      "Only when GROUP BY is present"
    ],
    "code": null,
    "tags": [
      "order-by"
    ]
  },
  {
    "category": "ORDER BY",
    "level": "Intermediate",
    "question": "A SQL learner asks: Can ORDER BY sort by more than one expression?",
    "answer": "A",
    "explanation": "Multiple expressions can be supplied to define primary and secondary sort order.",
    "id": "Q175",
    "options": [
      "Yes",
      "No, only one expression is allowed",
      "Only when GROUP BY is present",
      "Only for numeric columns"
    ],
    "code": null,
    "tags": [
      "order-by"
    ]
  },
  {
    "category": "ORDER BY",
    "level": "Intermediate",
    "question": "In ORDER BY ListPrice DESC, what happens to higher prices?",
    "answer": "C",
    "explanation": "DESC orders numeric values from high to low.",
    "id": "Q176",
    "options": [
      "They appear after lower prices",
      "They are converted to text",
      "They appear before lower prices",
      "They are filtered out"
    ],
    "code": null,
    "tags": [
      "order-by"
    ]
  },
  {
    "category": "ORDER BY",
    "level": "Intermediate",
    "question": "A SQL learner asks: In ORDER BY ListPrice DESC, what happens to higher prices?",
    "answer": "B",
    "explanation": "DESC orders numeric values from high to low.",
    "id": "Q177",
    "options": [
      "They are converted to text",
      "They appear before lower prices",
      "They are filtered out",
      "They appear after lower prices"
    ],
    "code": null,
    "tags": [
      "order-by"
    ]
  },
  {
    "category": "ORDER BY",
    "level": "Intermediate",
    "question": "Where should the final ORDER BY normally appear when using UNION?",
    "answer": "D",
    "explanation": "For a set operation, the final ORDER BY is placed after the combined result.",
    "id": "Q178",
    "options": [
      "Before the first SELECT",
      "Between every SELECT",
      "Inside every SELECT only",
      "At the end of the combined query"
    ],
    "code": null,
    "tags": [
      "order-by"
    ]
  },
  {
    "category": "ORDER BY",
    "level": "Intermediate",
    "question": "A SQL learner asks: Where should the final ORDER BY normally appear when using UNION?",
    "answer": "C",
    "explanation": "For a set operation, the final ORDER BY is placed after the combined result.",
    "id": "Q179",
    "options": [
      "Between every SELECT",
      "Inside every SELECT only",
      "At the end of the combined query",
      "Before the first SELECT"
    ],
    "code": null,
    "tags": [
      "order-by"
    ]
  },
  {
    "category": "ORDER BY",
    "level": "Intermediate",
    "question": "Why might ORDER BY be used with TOP 5 HireDate DESC?",
    "answer": "A",
    "explanation": "Sorting descending before applying TOP identifies the highest five dates.",
    "id": "Q180",
    "options": [
      "To choose the five most recent dates",
      "To group all dates",
      "To remove NULL dates",
      "To convert dates to strings"
    ],
    "code": null,
    "tags": [
      "order-by"
    ]
  },
  {
    "category": "ORDER BY",
    "level": "Intermediate",
    "question": "A SQL learner asks: Why might ORDER BY be used with TOP 5 HireDate DESC?",
    "answer": "D",
    "explanation": "Sorting descending before applying TOP identifies the highest five dates.",
    "id": "Q181",
    "options": [
      "To group all dates",
      "To remove NULL dates",
      "To convert dates to strings",
      "To choose the five most recent dates"
    ],
    "code": null,
    "tags": [
      "order-by"
    ]
  },
  {
    "category": "GROUP BY",
    "level": "Intermediate",
    "question": "What is the main purpose of GROUP BY?",
    "answer": "B",
    "explanation": "GROUP BY groups rows so aggregate functions can summarize each group.",
    "id": "Q182",
    "options": [
      "To create backups",
      "To form groups for aggregate calculations",
      "To sort rows alphabetically",
      "To rename columns"
    ],
    "code": null,
    "tags": [
      "group-by"
    ]
  },
  {
    "category": "GROUP BY",
    "level": "Intermediate",
    "question": "A SQL learner asks: What is the main purpose of GROUP BY?",
    "answer": "A",
    "explanation": "GROUP BY groups rows so aggregate functions can summarize each group.",
    "id": "Q183",
    "options": [
      "To form groups for aggregate calculations",
      "To sort rows alphabetically",
      "To rename columns",
      "To create backups"
    ],
    "code": null,
    "tags": [
      "group-by"
    ]
  },
  {
    "category": "GROUP BY",
    "level": "Intermediate",
    "question": "Which clause filters groups after aggregation?",
    "answer": "C",
    "explanation": "HAVING filters grouped results after aggregation.",
    "id": "Q184",
    "options": [
      "ORDER BY",
      "FROM",
      "HAVING",
      "WHERE"
    ],
    "code": null,
    "tags": [
      "group-by"
    ]
  },
  {
    "category": "GROUP BY",
    "level": "Intermediate",
    "question": "A SQL learner asks: Which clause filters groups after aggregation?",
    "answer": "B",
    "explanation": "HAVING filters grouped results after aggregation.",
    "id": "Q185",
    "options": [
      "FROM",
      "HAVING",
      "WHERE",
      "ORDER BY"
    ],
    "code": null,
    "tags": [
      "group-by"
    ]
  },
  {
    "category": "GROUP BY",
    "level": "Intermediate",
    "question": "If SELECT includes PayFrequency and SUM(Rate), what usually belongs in GROUP BY?",
    "answer": "D",
    "explanation": "Non-aggregated selected columns generally need to appear in GROUP BY.",
    "id": "Q186",
    "options": [
      "SUM(Rate)",
      "Rate only",
      "ORDER BY",
      "PayFrequency"
    ],
    "code": null,
    "tags": [
      "group-by"
    ]
  },
  {
    "category": "GROUP BY",
    "level": "Intermediate",
    "question": "A SQL learner asks: If SELECT includes PayFrequency and SUM(Rate), what usually belongs in GROUP BY?",
    "answer": "C",
    "explanation": "Non-aggregated selected columns generally need to appear in GROUP BY.",
    "id": "Q187",
    "options": [
      "Rate only",
      "ORDER BY",
      "PayFrequency",
      "SUM(Rate)"
    ],
    "code": null,
    "tags": [
      "group-by"
    ]
  },
  {
    "category": "GROUP BY",
    "level": "Intermediate",
    "question": "Which query pattern summarizes each category separately?",
    "answer": "A",
    "explanation": "GROUP BY creates a separate aggregate result for each category.",
    "id": "Q188",
    "options": [
      "SELECT Category, COUNT(*) ... GROUP BY Category",
      "SELECT Category ... ORDER BY COUNT(*)",
      "SELECT Category ... WHERE COUNT(*)",
      "SELECT Category ... DISTINCT COUNT"
    ],
    "code": null,
    "tags": [
      "group-by"
    ]
  },
  {
    "category": "GROUP BY",
    "level": "Intermediate",
    "question": "A SQL learner asks: Which query pattern summarizes each category separately?",
    "answer": "D",
    "explanation": "GROUP BY creates a separate aggregate result for each category.",
    "id": "Q189",
    "options": [
      "SELECT Category ... ORDER BY COUNT(*)",
      "SELECT Category ... WHERE COUNT(*)",
      "SELECT Category ... DISTINCT COUNT",
      "SELECT Category, COUNT(*) ... GROUP BY Category"
    ],
    "code": null,
    "tags": [
      "group-by"
    ]
  },
  {
    "category": "GROUP BY",
    "level": "Intermediate",
    "question": "Can GROUP BY be used with SUM()?",
    "answer": "B",
    "explanation": "SUM is commonly paired with GROUP BY for per-group totals.",
    "id": "Q190",
    "options": [
      "Only inside a backup command",
      "Yes",
      "No, SUM only works without grouping",
      "Only with UNION"
    ],
    "code": null,
    "tags": [
      "group-by"
    ]
  },
  {
    "category": "GROUP BY",
    "level": "Intermediate",
    "question": "A SQL learner asks: Can GROUP BY be used with SUM()?",
    "answer": "A",
    "explanation": "SUM is commonly paired with GROUP BY for per-group totals.",
    "id": "Q191",
    "options": [
      "Yes",
      "No, SUM only works without grouping",
      "Only with UNION",
      "Only inside a backup command"
    ],
    "code": null,
    "tags": [
      "group-by"
    ]
  },
  {
    "category": "GROUP BY",
    "level": "Advanced",
    "question": "Why is WHERE generally evaluated before GROUP BY?",
    "answer": "C",
    "explanation": "WHERE filters individual rows before the grouping stage.",
    "id": "Q192",
    "options": [
      "WHERE creates backups first",
      "WHERE only filters groups",
      "WHERE removes rows before grouping",
      "WHERE always runs after ORDER BY"
    ],
    "code": null,
    "tags": [
      "group-by"
    ]
  },
  {
    "category": "GROUP BY",
    "level": "Advanced",
    "question": "A SQL learner asks: Why is WHERE generally evaluated before GROUP BY?",
    "answer": "B",
    "explanation": "WHERE filters individual rows before the grouping stage.",
    "id": "Q193",
    "options": [
      "WHERE only filters groups",
      "WHERE removes rows before grouping",
      "WHERE always runs after ORDER BY",
      "WHERE creates backups first"
    ],
    "code": null,
    "tags": [
      "group-by"
    ]
  },
  {
    "category": "GROUP BY",
    "level": "Advanced",
    "question": "What does HAVING COUNT(*) > 5 conceptually do?",
    "answer": "D",
    "explanation": "HAVING applies a condition to grouped aggregate results.",
    "id": "Q194",
    "options": [
      "Keeps individual rows with value 5",
      "Sorts groups by five columns",
      "Removes all aggregate results",
      "Keeps groups containing more than five rows"
    ],
    "code": null,
    "tags": [
      "group-by"
    ]
  },
  {
    "category": "GROUP BY",
    "level": "Advanced",
    "question": "A SQL learner asks: What does HAVING COUNT(*) > 5 conceptually do?",
    "answer": "C",
    "explanation": "HAVING applies a condition to grouped aggregate results.",
    "id": "Q195",
    "options": [
      "Sorts groups by five columns",
      "Removes all aggregate results",
      "Keeps groups containing more than five rows",
      "Keeps individual rows with value 5"
    ],
    "code": null,
    "tags": [
      "group-by"
    ]
  },
  {
    "category": "AGGREGATES",
    "level": "Beginner",
    "question": "Which aggregate counts rows including rows containing NULLs in individual columns?",
    "answer": "A",
    "explanation": "COUNT(*) counts rows regardless of NULL values in particular columns.",
    "id": "Q196",
    "options": [
      "COUNT(*)",
      "COUNT(column)",
      "SUM(*)",
      "TOTAL(*)"
    ],
    "code": null,
    "tags": [
      "aggregates"
    ]
  },
  {
    "category": "AGGREGATES",
    "level": "Beginner",
    "question": "A SQL learner asks: Which aggregate counts rows including rows containing NULLs in individual columns?",
    "answer": "D",
    "explanation": "COUNT(*) counts rows regardless of NULL values in particular columns.",
    "id": "Q197",
    "options": [
      "COUNT(column)",
      "SUM(*)",
      "TOTAL(*)",
      "COUNT(*)"
    ],
    "code": null,
    "tags": [
      "aggregates"
    ]
  },
  {
    "category": "AGGREGATES",
    "level": "Beginner",
    "question": "Which aggregate adds numeric values?",
    "answer": "B",
    "explanation": "SUM adds numeric values across rows or groups.",
    "id": "Q198",
    "options": [
      "LEN()",
      "SUM()",
      "AVG()",
      "MAX()"
    ],
    "code": null,
    "tags": [
      "aggregates"
    ]
  },
  {
    "category": "AGGREGATES",
    "level": "Beginner",
    "question": "A SQL learner asks: Which aggregate adds numeric values?",
    "answer": "A",
    "explanation": "SUM adds numeric values across rows or groups.",
    "id": "Q199",
    "options": [
      "SUM()",
      "AVG()",
      "MAX()",
      "LEN()"
    ],
    "code": null,
    "tags": [
      "aggregates"
    ]
  },
  {
    "category": "AGGREGATES",
    "level": "Beginner",
    "question": "Which aggregate calculates an average?",
    "answer": "C",
    "explanation": "AVG calculates the arithmetic mean of qualifying numeric values.",
    "id": "Q200",
    "options": [
      "COUNT()",
      "MIN()",
      "AVG()",
      "SUM()"
    ],
    "code": null,
    "tags": [
      "aggregates"
    ]
  },
  {
    "category": "AGGREGATES",
    "level": "Beginner",
    "question": "A SQL learner asks: Which aggregate calculates an average?",
    "answer": "B",
    "explanation": "AVG calculates the arithmetic mean of qualifying numeric values.",
    "id": "Q201",
    "options": [
      "MIN()",
      "AVG()",
      "SUM()",
      "COUNT()"
    ],
    "code": null,
    "tags": [
      "aggregates"
    ]
  },
  {
    "category": "AGGREGATES",
    "level": "Beginner",
    "question": "Which aggregate returns the smallest value?",
    "answer": "D",
    "explanation": "MIN returns the lowest value in the input set.",
    "id": "Q202",
    "options": [
      "MAX()",
      "AVG()",
      "COUNT()",
      "MIN()"
    ],
    "code": null,
    "tags": [
      "aggregates"
    ]
  },
  {
    "category": "AGGREGATES",
    "level": "Beginner",
    "question": "A SQL learner asks: Which aggregate returns the smallest value?",
    "answer": "C",
    "explanation": "MIN returns the lowest value in the input set.",
    "id": "Q203",
    "options": [
      "AVG()",
      "COUNT()",
      "MIN()",
      "MAX()"
    ],
    "code": null,
    "tags": [
      "aggregates"
    ]
  },
  {
    "category": "AGGREGATES",
    "level": "Beginner",
    "question": "Which aggregate returns the largest value?",
    "answer": "A",
    "explanation": "MAX returns the highest value in the input set.",
    "id": "Q204",
    "options": [
      "MAX()",
      "MIN()",
      "SUM()",
      "LEN()"
    ],
    "code": null,
    "tags": [
      "aggregates"
    ]
  },
  {
    "category": "AGGREGATES",
    "level": "Beginner",
    "question": "A SQL learner asks: Which aggregate returns the largest value?",
    "answer": "D",
    "explanation": "MAX returns the highest value in the input set.",
    "id": "Q205",
    "options": [
      "MIN()",
      "SUM()",
      "LEN()",
      "MAX()"
    ],
    "code": null,
    "tags": [
      "aggregates"
    ]
  },
  {
    "category": "AGGREGATES",
    "level": "Intermediate",
    "question": "What does SELECT COUNT(ListPrice) generally count?",
    "answer": "B",
    "explanation": "COUNT(column) counts non-NULL values in that column.",
    "id": "Q206",
    "options": [
      "Only rows where ListPrice is zero",
      "Rows where ListPrice is not NULL",
      "All rows including NULL ListPrice",
      "Only duplicate prices"
    ],
    "code": null,
    "tags": [
      "aggregates"
    ]
  },
  {
    "category": "AGGREGATES",
    "level": "Intermediate",
    "question": "A SQL learner asks: What does SELECT COUNT(ListPrice) generally count?",
    "answer": "A",
    "explanation": "COUNT(column) counts non-NULL values in that column.",
    "id": "Q207",
    "options": [
      "Rows where ListPrice is not NULL",
      "All rows including NULL ListPrice",
      "Only duplicate prices",
      "Only rows where ListPrice is zero"
    ],
    "code": null,
    "tags": [
      "aggregates"
    ]
  },
  {
    "category": "AGGREGATES",
    "level": "Intermediate",
    "question": "Why are aggregate functions often paired with GROUP BY?",
    "answer": "C",
    "explanation": "GROUP BY lets an aggregate produce one summary per group.",
    "id": "Q208",
    "options": [
      "To convert numbers to strings",
      "To back up each group",
      "To produce summaries for each group",
      "To force alphabetical sorting"
    ],
    "code": null,
    "tags": [
      "aggregates"
    ]
  },
  {
    "category": "AGGREGATES",
    "level": "Intermediate",
    "question": "A SQL learner asks: Why are aggregate functions often paired with GROUP BY?",
    "answer": "B",
    "explanation": "GROUP BY lets an aggregate produce one summary per group.",
    "id": "Q209",
    "options": [
      "To back up each group",
      "To produce summaries for each group",
      "To force alphabetical sorting",
      "To convert numbers to strings"
    ],
    "code": null,
    "tags": [
      "aggregates"
    ]
  },
  {
    "category": "STRING",
    "level": "Beginner",
    "question": "What does UPPER(FirstName) return?",
    "answer": "D",
    "explanation": "UPPER converts alphabetic characters to uppercase.",
    "id": "Q210",
    "options": [
      "The first name in lowercase",
      "The length of the first name",
      "The reversed first name",
      "The first name in uppercase"
    ],
    "code": null,
    "tags": [
      "string"
    ]
  },
  {
    "category": "STRING",
    "level": "Beginner",
    "question": "A SQL learner asks: What does UPPER(FirstName) return?",
    "answer": "C",
    "explanation": "UPPER converts alphabetic characters to uppercase.",
    "id": "Q211",
    "options": [
      "The length of the first name",
      "The reversed first name",
      "The first name in uppercase",
      "The first name in lowercase"
    ],
    "code": null,
    "tags": [
      "string"
    ]
  },
  {
    "category": "STRING",
    "level": "Beginner",
    "question": "What does LOWER(FirstName) return?",
    "answer": "A",
    "explanation": "LOWER converts alphabetic characters to lowercase.",
    "id": "Q212",
    "options": [
      "The first name in lowercase",
      "The first name in uppercase",
      "The number of characters",
      "The first character only"
    ],
    "code": null,
    "tags": [
      "string"
    ]
  },
  {
    "category": "STRING",
    "level": "Beginner",
    "question": "A SQL learner asks: What does LOWER(FirstName) return?",
    "answer": "D",
    "explanation": "LOWER converts alphabetic characters to lowercase.",
    "id": "Q213",
    "options": [
      "The first name in uppercase",
      "The number of characters",
      "The first character only",
      "The first name in lowercase"
    ],
    "code": null,
    "tags": [
      "string"
    ]
  },
  {
    "category": "STRING",
    "level": "Beginner",
    "question": "What does LEN(FirstName) return?",
    "answer": "B",
    "explanation": "LEN returns the number of characters in a string expression, excluding trailing spaces in SQL Server.",
    "id": "Q214",
    "options": [
      "The number of rows",
      "The character count of FirstName",
      "The ASCII code of FirstName",
      "The last character"
    ],
    "code": null,
    "tags": [
      "string"
    ]
  },
  {
    "category": "STRING",
    "level": "Beginner",
    "question": "A SQL learner asks: What does LEN(FirstName) return?",
    "answer": "A",
    "explanation": "LEN returns the number of characters in a string expression, excluding trailing spaces in SQL Server.",
    "id": "Q215",
    "options": [
      "The character count of FirstName",
      "The ASCII code of FirstName",
      "The last character",
      "The number of rows"
    ],
    "code": null,
    "tags": [
      "string"
    ]
  },
  {
    "category": "STRING",
    "level": "Beginner",
    "question": "Which function returns characters from the left side of a string?",
    "answer": "C",
    "explanation": "LEFT returns a specified number of characters from the beginning of a string.",
    "id": "Q216",
    "options": [
      "REVERSE()",
      "SUBSTRING()",
      "LEFT()",
      "RIGHT()"
    ],
    "code": null,
    "tags": [
      "string"
    ]
  },
  {
    "category": "STRING",
    "level": "Beginner",
    "question": "A SQL learner asks: Which function returns characters from the left side of a string?",
    "answer": "B",
    "explanation": "LEFT returns a specified number of characters from the beginning of a string.",
    "id": "Q217",
    "options": [
      "SUBSTRING()",
      "LEFT()",
      "RIGHT()",
      "REVERSE()"
    ],
    "code": null,
    "tags": [
      "string"
    ]
  },
  {
    "category": "STRING",
    "level": "Beginner",
    "question": "Which function returns characters from the right side of a string?",
    "answer": "D",
    "explanation": "RIGHT returns a specified number of characters from the end of a string.",
    "id": "Q218",
    "options": [
      "LEFT()",
      "REPLACE()",
      "CHARINDEX()",
      "RIGHT()"
    ],
    "code": null,
    "tags": [
      "string"
    ]
  },
  {
    "category": "STRING",
    "level": "Beginner",
    "question": "A SQL learner asks: Which function returns characters from the right side of a string?",
    "answer": "C",
    "explanation": "RIGHT returns a specified number of characters from the end of a string.",
    "id": "Q219",
    "options": [
      "REPLACE()",
      "CHARINDEX()",
      "RIGHT()",
      "LEFT()"
    ],
    "code": null,
    "tags": [
      "string"
    ]
  },
  {
    "category": "STRING",
    "level": "Intermediate",
    "question": "What does REVERSE() do to a string?",
    "answer": "A",
    "explanation": "REVERSE returns the input characters in reverse order.",
    "id": "Q220",
    "options": [
      "Reverses the character order",
      "Replaces spaces with hyphens",
      "Converts the string to uppercase",
      "Counts characters"
    ],
    "code": null,
    "tags": [
      "string"
    ]
  },
  {
    "category": "STRING",
    "level": "Intermediate",
    "question": "A SQL learner asks: What does REVERSE() do to a string?",
    "answer": "D",
    "explanation": "REVERSE returns the input characters in reverse order.",
    "id": "Q221",
    "options": [
      "Replaces spaces with hyphens",
      "Converts the string to uppercase",
      "Counts characters",
      "Reverses the character order"
    ],
    "code": null,
    "tags": [
      "string"
    ]
  },
  {
    "category": "STRING",
    "level": "Intermediate",
    "question": "What does SUBSTRING() let you specify?",
    "answer": "B",
    "explanation": "SUBSTRING extracts a portion of a string using a start position and length.",
    "id": "Q222",
    "options": [
      "Only a case conversion",
      "A starting position and a length",
      "Only a replacement string",
      "Only a delimiter"
    ],
    "code": null,
    "tags": [
      "string"
    ]
  },
  {
    "category": "STRING",
    "level": "Intermediate",
    "question": "A SQL learner asks: What does SUBSTRING() let you specify?",
    "answer": "A",
    "explanation": "SUBSTRING extracts a portion of a string using a start position and length.",
    "id": "Q223",
    "options": [
      "A starting position and a length",
      "Only a replacement string",
      "Only a delimiter",
      "Only a case conversion"
    ],
    "code": null,
    "tags": [
      "string"
    ]
  },
  {
    "category": "STRING",
    "level": "Intermediate",
    "question": "What does CHARINDEX() return when it finds a substring?",
    "answer": "C",
    "explanation": "CHARINDEX returns the starting position of a specified expression within another string.",
    "id": "Q224",
    "options": [
      "The entire row count",
      "A date value",
      "The starting position of the match",
      "The matched text length only"
    ],
    "code": null,
    "tags": [
      "string"
    ]
  },
  {
    "category": "STRING",
    "level": "Intermediate",
    "question": "A SQL learner asks: What does CHARINDEX() return when it finds a substring?",
    "answer": "B",
    "explanation": "CHARINDEX returns the starting position of a specified expression within another string.",
    "id": "Q225",
    "options": [
      "A date value",
      "The starting position of the match",
      "The matched text length only",
      "The entire row count"
    ],
    "code": null,
    "tags": [
      "string"
    ]
  },
  {
    "category": "STRING",
    "level": "Intermediate",
    "question": "What does CHARINDEX() return when the searched expression is not found?",
    "answer": "D",
    "explanation": "CHARINDEX returns zero when the searched expression is not found.",
    "id": "Q226",
    "options": [
      "NULL in every case",
      "-1",
      "The length of the source string",
      "0"
    ],
    "code": null,
    "tags": [
      "string"
    ]
  },
  {
    "category": "STRING",
    "level": "Intermediate",
    "question": "A SQL learner asks: What does CHARINDEX() return when the searched expression is not found?",
    "answer": "C",
    "explanation": "CHARINDEX returns zero when the searched expression is not found.",
    "id": "Q227",
    "options": [
      "-1",
      "The length of the source string",
      "0",
      "NULL in every case"
    ],
    "code": null,
    "tags": [
      "string"
    ]
  },
  {
    "category": "STRING",
    "level": "Intermediate",
    "question": "What does CONCAT() do?",
    "answer": "A",
    "explanation": "CONCAT combines two or more values into a single string representation.",
    "id": "Q228",
    "options": [
      "Combines multiple values into one string",
      "Splits a string into rows",
      "Counts characters",
      "Rounds numbers"
    ],
    "code": null,
    "tags": [
      "string"
    ]
  },
  {
    "category": "STRING",
    "level": "Intermediate",
    "question": "A SQL learner asks: What does CONCAT() do?",
    "answer": "D",
    "explanation": "CONCAT combines two or more values into a single string representation.",
    "id": "Q229",
    "options": [
      "Splits a string into rows",
      "Counts characters",
      "Rounds numbers",
      "Combines multiple values into one string"
    ],
    "code": null,
    "tags": [
      "string"
    ]
  },
  {
    "category": "STRING",
    "level": "Intermediate",
    "question": "What does CONCAT_WS() add while combining strings?",
    "answer": "B",
    "explanation": "CONCAT_WS combines values using the supplied separator.",
    "id": "Q230",
    "options": [
      "A NULL filter",
      "A separator between values",
      "A backup file",
      "A random sort order"
    ],
    "code": null,
    "tags": [
      "string"
    ]
  },
  {
    "category": "STRING",
    "level": "Intermediate",
    "question": "A SQL learner asks: What does CONCAT_WS() add while combining strings?",
    "answer": "A",
    "explanation": "CONCAT_WS combines values using the supplied separator.",
    "id": "Q231",
    "options": [
      "A separator between values",
      "A backup file",
      "A random sort order",
      "A NULL filter"
    ],
    "code": null,
    "tags": [
      "string"
    ]
  },
  {
    "category": "STRING",
    "level": "Intermediate",
    "question": "What does DATALENGTH() measure?",
    "answer": "C",
    "explanation": "DATALENGTH reports storage length in bytes.",
    "id": "Q232",
    "options": [
      "The number of words",
      "The number of tables",
      "The number of bytes used to store an expression",
      "The number of rows"
    ],
    "code": null,
    "tags": [
      "string"
    ]
  },
  {
    "category": "STRING",
    "level": "Intermediate",
    "question": "A SQL learner asks: What does DATALENGTH() measure?",
    "answer": "B",
    "explanation": "DATALENGTH reports storage length in bytes.",
    "id": "Q233",
    "options": [
      "The number of tables",
      "The number of bytes used to store an expression",
      "The number of rows",
      "The number of words"
    ],
    "code": null,
    "tags": [
      "string"
    ]
  },
  {
    "category": "STRING",
    "level": "Intermediate",
    "question": "What does FORMAT() primarily do?",
    "answer": "D",
    "explanation": "FORMAT returns a formatted representation based on the supplied format.",
    "id": "Q234",
    "options": [
      "Creates a table",
      "Filters NULLs",
      "Joins two tables",
      "Formats a value according to a specified format string"
    ],
    "code": null,
    "tags": [
      "string"
    ]
  },
  {
    "category": "STRING",
    "level": "Intermediate",
    "question": "A SQL learner asks: What does FORMAT() primarily do?",
    "answer": "C",
    "explanation": "FORMAT returns a formatted representation based on the supplied format.",
    "id": "Q235",
    "options": [
      "Filters NULLs",
      "Joins two tables",
      "Formats a value according to a specified format string",
      "Creates a table"
    ],
    "code": null,
    "tags": [
      "string"
    ]
  },
  {
    "category": "STRING",
    "level": "Advanced",
    "question": "What does REPLACE(Name,'Bike','Cycle') attempt to do?",
    "answer": "A",
    "explanation": "REPLACE substitutes occurrences of a specified substring with another string.",
    "id": "Q236",
    "options": [
      "Replace occurrences of Bike with Cycle",
      "Remove every character after Bike",
      "Reverse the string",
      "Count Bike occurrences only"
    ],
    "code": null,
    "tags": [
      "string"
    ]
  },
  {
    "category": "STRING",
    "level": "Advanced",
    "question": "A SQL learner asks: What does REPLACE(Name,'Bike','Cycle') attempt to do?",
    "answer": "D",
    "explanation": "REPLACE substitutes occurrences of a specified substring with another string.",
    "id": "Q237",
    "options": [
      "Remove every character after Bike",
      "Reverse the string",
      "Count Bike occurrences only",
      "Replace occurrences of Bike with Cycle"
    ],
    "code": null,
    "tags": [
      "string"
    ]
  },
  {
    "category": "DATES",
    "level": "Beginner",
    "question": "What does DATEADD() do?",
    "answer": "B",
    "explanation": "DATEADD adds a number of datepart units to a date expression.",
    "id": "Q238",
    "options": [
      "Removes duplicates",
      "Adds a specified interval to a date or datetime",
      "Counts rows",
      "Formats a table name"
    ],
    "code": null,
    "tags": [
      "dates"
    ]
  },
  {
    "category": "DATES",
    "level": "Beginner",
    "question": "A SQL learner asks: What does DATEADD() do?",
    "answer": "A",
    "explanation": "DATEADD adds a number of datepart units to a date expression.",
    "id": "Q239",
    "options": [
      "Adds a specified interval to a date or datetime",
      "Counts rows",
      "Formats a table name",
      "Removes duplicates"
    ],
    "code": null,
    "tags": [
      "dates"
    ]
  },
  {
    "category": "DATES",
    "level": "Beginner",
    "question": "What does DATEDIFF() calculate?",
    "answer": "C",
    "explanation": "DATEDIFF counts datepart boundaries between a start and end date.",
    "id": "Q240",
    "options": [
      "The number of columns",
      "A backup size",
      "The difference between two dates using a specified datepart",
      "The average price"
    ],
    "code": null,
    "tags": [
      "dates"
    ]
  },
  {
    "category": "DATES",
    "level": "Beginner",
    "question": "A SQL learner asks: What does DATEDIFF() calculate?",
    "answer": "B",
    "explanation": "DATEDIFF counts datepart boundaries between a start and end date.",
    "id": "Q241",
    "options": [
      "A backup size",
      "The difference between two dates using a specified datepart",
      "The average price",
      "The number of columns"
    ],
    "code": null,
    "tags": [
      "dates"
    ]
  },
  {
    "category": "DATES",
    "level": "Beginner",
    "question": "Which function extracts the year from a date?",
    "answer": "D",
    "explanation": "YEAR returns the year component of a date.",
    "id": "Q242",
    "options": [
      "MONTH()",
      "DAY()",
      "DATEADD()",
      "YEAR()"
    ],
    "code": null,
    "tags": [
      "dates"
    ]
  },
  {
    "category": "DATES",
    "level": "Beginner",
    "question": "A SQL learner asks: Which function extracts the year from a date?",
    "answer": "C",
    "explanation": "YEAR returns the year component of a date.",
    "id": "Q243",
    "options": [
      "DAY()",
      "DATEADD()",
      "YEAR()",
      "MONTH()"
    ],
    "code": null,
    "tags": [
      "dates"
    ]
  },
  {
    "category": "DATES",
    "level": "Beginner",
    "question": "Which function extracts the month number from a date?",
    "answer": "A",
    "explanation": "MONTH returns the month component of a date.",
    "id": "Q244",
    "options": [
      "MONTH()",
      "YEAR()",
      "DAY()",
      "DATEDIFF()"
    ],
    "code": null,
    "tags": [
      "dates"
    ]
  },
  {
    "category": "DATES",
    "level": "Beginner",
    "question": "A SQL learner asks: Which function extracts the month number from a date?",
    "answer": "D",
    "explanation": "MONTH returns the month component of a date.",
    "id": "Q245",
    "options": [
      "YEAR()",
      "DAY()",
      "DATEDIFF()",
      "MONTH()"
    ],
    "code": null,
    "tags": [
      "dates"
    ]
  },
  {
    "category": "DATES",
    "level": "Beginner",
    "question": "Which function extracts the day number from a date?",
    "answer": "B",
    "explanation": "DAY returns the day-of-month component of a date.",
    "id": "Q246",
    "options": [
      "DATEADD()",
      "DAY()",
      "YEAR()",
      "MONTH()"
    ],
    "code": null,
    "tags": [
      "dates"
    ]
  },
  {
    "category": "DATES",
    "level": "Beginner",
    "question": "A SQL learner asks: Which function extracts the day number from a date?",
    "answer": "A",
    "explanation": "DAY returns the day-of-month component of a date.",
    "id": "Q247",
    "options": [
      "DAY()",
      "YEAR()",
      "MONTH()",
      "DATEADD()"
    ],
    "code": null,
    "tags": [
      "dates"
    ]
  },
  {
    "category": "DATES",
    "level": "Intermediate",
    "question": "In DATEADD(month, 3, SellStartDate), what is 3?",
    "answer": "C",
    "explanation": "The second DATEADD argument is the signed number of datepart units to add.",
    "id": "Q248",
    "options": [
      "The column position",
      "The number of rows",
      "The number of months to add",
      "The target year"
    ],
    "code": null,
    "tags": [
      "dates"
    ]
  },
  {
    "category": "DATES",
    "level": "Intermediate",
    "question": "A SQL learner asks: In DATEADD(month, 3, SellStartDate), what is 3?",
    "answer": "B",
    "explanation": "The second DATEADD argument is the signed number of datepart units to add.",
    "id": "Q249",
    "options": [
      "The number of rows",
      "The number of months to add",
      "The target year",
      "The column position"
    ],
    "code": null,
    "tags": [
      "dates"
    ]
  },
  {
    "category": "DATES",
    "level": "Intermediate",
    "question": "Which DATEADD datepart represents hours in the study examples?",
    "answer": "D",
    "explanation": "The study notes use hh for the hour datepart.",
    "id": "Q250",
    "options": [
      "yyyy",
      "q",
      "ms",
      "hh"
    ],
    "code": null,
    "tags": [
      "dates"
    ]
  },
  {
    "category": "DATES",
    "level": "Intermediate",
    "question": "A SQL learner asks: Which DATEADD datepart represents hours in the study examples?",
    "answer": "C",
    "explanation": "The study notes use hh for the hour datepart.",
    "id": "Q251",
    "options": [
      "q",
      "ms",
      "hh",
      "yyyy"
    ],
    "code": null,
    "tags": [
      "dates"
    ]
  },
  {
    "category": "DATES",
    "level": "Intermediate",
    "question": "Which DATEADD datepart represents minutes in the study examples?",
    "answer": "A",
    "explanation": "The study notes use n for minutes.",
    "id": "Q252",
    "options": [
      "n",
      "d",
      "s",
      "q"
    ],
    "code": null,
    "tags": [
      "dates"
    ]
  },
  {
    "category": "DATES",
    "level": "Intermediate",
    "question": "A SQL learner asks: Which DATEADD datepart represents minutes in the study examples?",
    "answer": "D",
    "explanation": "The study notes use n for minutes.",
    "id": "Q253",
    "options": [
      "d",
      "s",
      "q",
      "n"
    ],
    "code": null,
    "tags": [
      "dates"
    ]
  },
  {
    "category": "DATES",
    "level": "Intermediate",
    "question": "Which DATEADD datepart represents seconds in the study examples?",
    "answer": "B",
    "explanation": "The study notes use s for seconds.",
    "id": "Q254",
    "options": [
      "yyyy",
      "s",
      "n",
      "m"
    ],
    "code": null,
    "tags": [
      "dates"
    ]
  },
  {
    "category": "DATES",
    "level": "Intermediate",
    "question": "A SQL learner asks: Which DATEADD datepart represents seconds in the study examples?",
    "answer": "A",
    "explanation": "The study notes use s for seconds.",
    "id": "Q255",
    "options": [
      "s",
      "n",
      "m",
      "yyyy"
    ],
    "code": null,
    "tags": [
      "dates"
    ]
  },
  {
    "category": "DATES",
    "level": "Intermediate",
    "question": "Which DATEADD datepart represents milliseconds in the study examples?",
    "answer": "C",
    "explanation": "The study notes use ms for milliseconds.",
    "id": "Q256",
    "options": [
      "n",
      "q",
      "ms",
      "s"
    ],
    "code": null,
    "tags": [
      "dates"
    ]
  },
  {
    "category": "DATES",
    "level": "Intermediate",
    "question": "A SQL learner asks: Which DATEADD datepart represents milliseconds in the study examples?",
    "answer": "B",
    "explanation": "The study notes use ms for milliseconds.",
    "id": "Q257",
    "options": [
      "q",
      "ms",
      "s",
      "n"
    ],
    "code": null,
    "tags": [
      "dates"
    ]
  },
  {
    "category": "DATES",
    "level": "Intermediate",
    "question": "What does DATEADD(q, 3, SellStartDate) add?",
    "answer": "D",
    "explanation": "q represents quarter, so three quarters are added.",
    "id": "Q258",
    "options": [
      "Three days",
      "Three years",
      "Three minutes",
      "Three quarters"
    ],
    "code": null,
    "tags": [
      "dates"
    ]
  },
  {
    "category": "DATES",
    "level": "Intermediate",
    "question": "A SQL learner asks: What does DATEADD(q, 3, SellStartDate) add?",
    "answer": "C",
    "explanation": "q represents quarter, so three quarters are added.",
    "id": "Q259",
    "options": [
      "Three years",
      "Three minutes",
      "Three quarters",
      "Three days"
    ],
    "code": null,
    "tags": [
      "dates"
    ]
  },
  {
    "category": "DATES",
    "level": "Advanced",
    "question": "What does DATEDIFF(q, SellStartDate, SellEndDate) measure?",
    "answer": "A",
    "explanation": "DATEDIFF with q uses quarters as the datepart.",
    "id": "Q260",
    "options": [
      "The difference in quarter boundaries between the dates",
      "The exact number of minutes only",
      "The number of product rows",
      "The list price difference"
    ],
    "code": null,
    "tags": [
      "dates"
    ]
  },
  {
    "category": "DATES",
    "level": "Advanced",
    "question": "A SQL learner asks: What does DATEDIFF(q, SellStartDate, SellEndDate) measure?",
    "answer": "D",
    "explanation": "DATEDIFF with q uses quarters as the datepart.",
    "id": "Q261",
    "options": [
      "The exact number of minutes only",
      "The number of product rows",
      "The list price difference",
      "The difference in quarter boundaries between the dates"
    ],
    "code": null,
    "tags": [
      "dates"
    ]
  },
  {
    "category": "DATES",
    "level": "Advanced",
    "question": "Why might a date query use WHERE SellEndDate IS NOT NULL before DATEDIFF?",
    "answer": "B",
    "explanation": "The filter excludes rows that have no SellEndDate value.",
    "id": "Q262",
    "options": [
      "To create a backup",
      "To calculate only for rows with an end date",
      "To sort dates alphabetically",
      "To convert dates to text"
    ],
    "code": null,
    "tags": [
      "dates"
    ]
  },
  {
    "category": "DATES",
    "level": "Advanced",
    "question": "A SQL learner asks: Why might a date query use WHERE SellEndDate IS NOT NULL before DATEDIFF?",
    "answer": "A",
    "explanation": "The filter excludes rows that have no SellEndDate value.",
    "id": "Q263",
    "options": [
      "To calculate only for rows with an end date",
      "To sort dates alphabetically",
      "To convert dates to text",
      "To create a backup"
    ],
    "code": null,
    "tags": [
      "dates"
    ]
  },
  {
    "category": "DATES",
    "level": "Intermediate",
    "question": "What does CONVERT(DATE, SellStartDate) do in the study example?",
    "answer": "C",
    "explanation": "Converting to DATE removes the time component from the displayed value.",
    "id": "Q264",
    "options": [
      "Returns only the year",
      "Counts milliseconds",
      "Converts the expression to DATE, removing the time portion",
      "Adds one day"
    ],
    "code": null,
    "tags": [
      "dates"
    ]
  },
  {
    "category": "DATES",
    "level": "Intermediate",
    "question": "A SQL learner asks: What does CONVERT(DATE, SellStartDate) do in the study example?",
    "answer": "B",
    "explanation": "Converting to DATE removes the time component from the displayed value.",
    "id": "Q265",
    "options": [
      "Counts milliseconds",
      "Converts the expression to DATE, removing the time portion",
      "Adds one day",
      "Returns only the year"
    ],
    "code": null,
    "tags": [
      "dates"
    ]
  },
  {
    "category": "NULL",
    "level": "Beginner",
    "question": "Why should NULL normally be tested with IS NULL rather than = NULL?",
    "answer": "D",
    "explanation": "NULL is not compared with ordinary equality; IS NULL is the predicate used to test it.",
    "id": "Q266",
    "options": [
      "NULL is always zero",
      "NULL is always an empty string",
      "SQL Server converts NULL to false before comparison",
      "NULL represents an unknown/missing value and uses special comparison semantics"
    ],
    "code": null,
    "tags": [
      "null"
    ]
  },
  {
    "category": "NULL",
    "level": "Beginner",
    "question": "A SQL learner asks: Why should NULL normally be tested with IS NULL rather than = NULL?",
    "answer": "C",
    "explanation": "NULL is not compared with ordinary equality; IS NULL is the predicate used to test it.",
    "id": "Q267",
    "options": [
      "NULL is always an empty string",
      "SQL Server converts NULL to false before comparison",
      "NULL represents an unknown/missing value and uses special comparison semantics",
      "NULL is always zero"
    ],
    "code": null,
    "tags": [
      "null"
    ]
  },
  {
    "category": "NULL",
    "level": "Beginner",
    "question": "What does IS NOT NULL select?",
    "answer": "A",
    "explanation": "IS NOT NULL keeps rows whose expression is not NULL.",
    "id": "Q268",
    "options": [
      "Rows where the expression has a non-NULL value",
      "Only zeros",
      "Only empty strings",
      "Only duplicates"
    ],
    "code": null,
    "tags": [
      "null"
    ]
  },
  {
    "category": "NULL",
    "level": "Beginner",
    "question": "A SQL learner asks: What does IS NOT NULL select?",
    "answer": "D",
    "explanation": "IS NOT NULL keeps rows whose expression is not NULL.",
    "id": "Q269",
    "options": [
      "Only zeros",
      "Only empty strings",
      "Only duplicates",
      "Rows where the expression has a non-NULL value"
    ],
    "code": null,
    "tags": [
      "null"
    ]
  },
  {
    "category": "NULL",
    "level": "Intermediate",
    "question": "What does ISNULL(Color, 'Unknown') return when Color is NULL?",
    "answer": "B",
    "explanation": "ISNULL returns the replacement expression when the first expression is NULL.",
    "id": "Q270",
    "options": [
      "0",
      "Unknown",
      "NULL",
      "An empty string"
    ],
    "code": null,
    "tags": [
      "null"
    ]
  },
  {
    "category": "NULL",
    "level": "Intermediate",
    "question": "A SQL learner asks: What does ISNULL(Color, 'Unknown') return when Color is NULL?",
    "answer": "A",
    "explanation": "ISNULL returns the replacement expression when the first expression is NULL.",
    "id": "Q271",
    "options": [
      "Unknown",
      "NULL",
      "An empty string",
      "0"
    ],
    "code": null,
    "tags": [
      "null"
    ]
  },
  {
    "category": "NULL",
    "level": "Intermediate",
    "question": "What is the first argument of ISNULL()?",
    "answer": "C",
    "explanation": "ISNULL(expression, replacement) tests the first expression and substitutes the second when needed.",
    "id": "Q272",
    "options": [
      "A sort direction",
      "A table name",
      "The expression being tested for NULL",
      "The replacement value only"
    ],
    "code": null,
    "tags": [
      "null"
    ]
  },
  {
    "category": "NULL",
    "level": "Intermediate",
    "question": "A SQL learner asks: What is the first argument of ISNULL()?",
    "answer": "B",
    "explanation": "ISNULL(expression, replacement) tests the first expression and substitutes the second when needed.",
    "id": "Q273",
    "options": [
      "A table name",
      "The expression being tested for NULL",
      "The replacement value only",
      "A sort direction"
    ],
    "code": null,
    "tags": [
      "null"
    ]
  },
  {
    "category": "NULL",
    "level": "Intermediate",
    "question": "What does COALESCE(NULL, NULL, 'Welcome', NULL, 'SQL') return?",
    "answer": "D",
    "explanation": "COALESCE returns the first non-NULL expression in its argument list.",
    "id": "Q274",
    "options": [
      "SQL",
      "NULL",
      "An empty string",
      "Welcome"
    ],
    "code": null,
    "tags": [
      "null"
    ]
  },
  {
    "category": "NULL",
    "level": "Intermediate",
    "question": "A SQL learner asks: What does COALESCE(NULL, NULL, 'Welcome', NULL, 'SQL') return?",
    "answer": "C",
    "explanation": "COALESCE returns the first non-NULL expression in its argument list.",
    "id": "Q275",
    "options": [
      "NULL",
      "An empty string",
      "Welcome",
      "SQL"
    ],
    "code": null,
    "tags": [
      "null"
    ]
  },
  {
    "category": "NULL",
    "level": "Intermediate",
    "question": "What does NULLIF(14, 12) return?",
    "answer": "A",
    "explanation": "NULLIF returns NULL when its two arguments are equal; 14 and 12 are not equal.",
    "id": "Q276",
    "options": [
      "14",
      "12",
      "NULL",
      "0"
    ],
    "code": null,
    "tags": [
      "null"
    ]
  },
  {
    "category": "NULL",
    "level": "Intermediate",
    "question": "A SQL learner asks: What does NULLIF(14, 12) return?",
    "answer": "D",
    "explanation": "NULLIF returns NULL when its two arguments are equal; 14 and 12 are not equal.",
    "id": "Q277",
    "options": [
      "12",
      "NULL",
      "0",
      "14"
    ],
    "code": null,
    "tags": [
      "null"
    ]
  },
  {
    "category": "NULL",
    "level": "Advanced",
    "question": "What does NULLIF(14, 14) return?",
    "answer": "B",
    "explanation": "When both arguments are equal, NULLIF returns NULL.",
    "id": "Q278",
    "options": [
      "An empty string",
      "NULL",
      "14",
      "0"
    ],
    "code": null,
    "tags": [
      "null"
    ]
  },
  {
    "category": "NULL",
    "level": "Advanced",
    "question": "A SQL learner asks: What does NULLIF(14, 14) return?",
    "answer": "A",
    "explanation": "When both arguments are equal, NULLIF returns NULL.",
    "id": "Q279",
    "options": [
      "NULL",
      "14",
      "0",
      "An empty string"
    ],
    "code": null,
    "tags": [
      "null"
    ]
  },
  {
    "category": "LOGIC",
    "level": "Intermediate",
    "question": "What does IIF(SafetyStockLevel > 500, 'High', 'Low') return when SafetyStockLevel is 600?",
    "answer": "C",
    "explanation": "The condition is true for 600, so IIF returns the second argument, High.",
    "id": "Q280",
    "options": [
      "NULL",
      "600",
      "High",
      "Low"
    ],
    "code": null,
    "tags": [
      "logic"
    ]
  },
  {
    "category": "LOGIC",
    "level": "Intermediate",
    "question": "A SQL learner asks: What does IIF(SafetyStockLevel > 500, 'High', 'Low') return when SafetyStockLevel is 600?",
    "answer": "B",
    "explanation": "The condition is true for 600, so IIF returns the second argument, High.",
    "id": "Q281",
    "options": [
      "600",
      "High",
      "Low",
      "NULL"
    ],
    "code": null,
    "tags": [
      "logic"
    ]
  },
  {
    "category": "LOGIC",
    "level": "Intermediate",
    "question": "What does IIF(ListPrice >= StandardCost, 'Profit', 'Loss') classify when ListPrice is greater than StandardCost?",
    "answer": "D",
    "explanation": "The comparison is true when ListPrice is at least StandardCost.",
    "id": "Q282",
    "options": [
      "Loss",
      "NULL",
      "Cost",
      "Profit"
    ],
    "code": null,
    "tags": [
      "logic"
    ]
  },
  {
    "category": "LOGIC",
    "level": "Intermediate",
    "question": "A SQL learner asks: What does IIF(ListPrice >= StandardCost, 'Profit', 'Loss') classify when ListPrice is greater than StandardCost?",
    "answer": "C",
    "explanation": "The comparison is true when ListPrice is at least StandardCost.",
    "id": "Q283",
    "options": [
      "NULL",
      "Cost",
      "Profit",
      "Loss"
    ],
    "code": null,
    "tags": [
      "logic"
    ]
  },
  {
    "category": "LOGIC",
    "level": "Intermediate",
    "question": "What does a CASE expression do?",
    "answer": "A",
    "explanation": "CASE provides conditional logic inside a SQL expression.",
    "id": "Q284",
    "options": [
      "Evaluates conditions and returns the matching result expression",
      "Always sorts rows",
      "Creates a database backup",
      "Only counts rows"
    ],
    "code": null,
    "tags": [
      "logic"
    ]
  },
  {
    "category": "LOGIC",
    "level": "Intermediate",
    "question": "A SQL learner asks: What does a CASE expression do?",
    "answer": "D",
    "explanation": "CASE provides conditional logic inside a SQL expression.",
    "id": "Q285",
    "options": [
      "Always sorts rows",
      "Creates a database backup",
      "Only counts rows",
      "Evaluates conditions and returns the matching result expression"
    ],
    "code": null,
    "tags": [
      "logic"
    ]
  },
  {
    "category": "LOGIC",
    "level": "Intermediate",
    "question": "In CASE WHEN VacationHours > 70 THEN ... ELSE ... END, when is the THEN branch used?",
    "answer": "B",
    "explanation": "The WHEN predicate controls whether the THEN expression is returned.",
    "id": "Q286",
    "options": [
      "Only when the table is empty",
      "When VacationHours is greater than 70",
      "When VacationHours is NULL only",
      "When VacationHours is 70 or less"
    ],
    "code": null,
    "tags": [
      "logic"
    ]
  },
  {
    "category": "LOGIC",
    "level": "Intermediate",
    "question": "A SQL learner asks: In CASE WHEN VacationHours > 70 THEN ... ELSE ... END, when is the THEN branch used?",
    "answer": "A",
    "explanation": "The WHEN predicate controls whether the THEN expression is returned.",
    "id": "Q287",
    "options": [
      "When VacationHours is greater than 70",
      "When VacationHours is NULL only",
      "When VacationHours is 70 or less",
      "Only when the table is empty"
    ],
    "code": null,
    "tags": [
      "logic"
    ]
  },
  {
    "category": "LOGIC",
    "level": "Intermediate",
    "question": "What does the ELSE branch of CASE provide?",
    "answer": "C",
    "explanation": "ELSE supplies the fallback result when no WHEN condition is true.",
    "id": "Q288",
    "options": [
      "A sort order",
      "A backup schedule",
      "The result when no preceding WHEN condition matches",
      "A second table"
    ],
    "code": null,
    "tags": [
      "logic"
    ]
  },
  {
    "category": "LOGIC",
    "level": "Intermediate",
    "question": "A SQL learner asks: What does the ELSE branch of CASE provide?",
    "answer": "B",
    "explanation": "ELSE supplies the fallback result when no WHEN condition is true.",
    "id": "Q289",
    "options": [
      "A backup schedule",
      "The result when no preceding WHEN condition matches",
      "A second table",
      "A sort order"
    ],
    "code": null,
    "tags": [
      "logic"
    ]
  },
  {
    "category": "LOGIC",
    "level": "Advanced",
    "question": "Which comparison combines two conditions so both must be true?",
    "answer": "D",
    "explanation": "AND requires every combined predicate to evaluate true for the overall condition to be true.",
    "id": "Q290",
    "options": [
      "OR",
      "NOT",
      "BETWEEN",
      "AND"
    ],
    "code": null,
    "tags": [
      "logic"
    ]
  },
  {
    "category": "LOGIC",
    "level": "Advanced",
    "question": "A SQL learner asks: Which comparison combines two conditions so both must be true?",
    "answer": "C",
    "explanation": "AND requires every combined predicate to evaluate true for the overall condition to be true.",
    "id": "Q291",
    "options": [
      "NOT",
      "BETWEEN",
      "AND",
      "OR"
    ],
    "code": null,
    "tags": [
      "logic"
    ]
  },
  {
    "category": "LOGIC",
    "level": "Advanced",
    "question": "Which logical operator makes a condition true when at least one supplied condition is true?",
    "answer": "A",
    "explanation": "OR requires at least one of its conditions to be true.",
    "id": "Q292",
    "options": [
      "OR",
      "AND",
      "NOT",
      "IS NULL"
    ],
    "code": null,
    "tags": [
      "logic"
    ]
  },
  {
    "category": "LOGIC",
    "level": "Advanced",
    "question": "A SQL learner asks: Which logical operator makes a condition true when at least one supplied condition is true?",
    "answer": "D",
    "explanation": "OR requires at least one of its conditions to be true.",
    "id": "Q293",
    "options": [
      "AND",
      "NOT",
      "IS NULL",
      "OR"
    ],
    "code": null,
    "tags": [
      "logic"
    ]
  },
  {
    "category": "SUBQUERY",
    "level": "Intermediate",
    "question": "What is a subquery?",
    "answer": "B",
    "explanation": "A subquery is an inner query whose result is used by an outer query.",
    "id": "Q294",
    "options": [
      "A transaction log file",
      "A query written inside another query",
      "A database backup",
      "A column alias"
    ],
    "code": null,
    "tags": [
      "subquery"
    ]
  },
  {
    "category": "SUBQUERY",
    "level": "Intermediate",
    "question": "A SQL learner asks: What is a subquery?",
    "answer": "A",
    "explanation": "A subquery is an inner query whose result is used by an outer query.",
    "id": "Q295",
    "options": [
      "A query written inside another query",
      "A database backup",
      "A column alias",
      "A transaction log file"
    ],
    "code": null,
    "tags": [
      "subquery"
    ]
  },
  {
    "category": "SUBQUERY",
    "level": "Intermediate",
    "question": "What does a scalar subquery normally return?",
    "answer": "C",
    "explanation": "A scalar subquery supplies one value for use by the surrounding expression.",
    "id": "Q296",
    "options": [
      "Exactly four columns",
      "Only duplicate rows",
      "A single value",
      "An entire database"
    ],
    "code": null,
    "tags": [
      "subquery"
    ]
  },
  {
    "category": "SUBQUERY",
    "level": "Intermediate",
    "question": "A SQL learner asks: What does a scalar subquery normally return?",
    "answer": "B",
    "explanation": "A scalar subquery supplies one value for use by the surrounding expression.",
    "id": "Q297",
    "options": [
      "Only duplicate rows",
      "A single value",
      "An entire database",
      "Exactly four columns"
    ],
    "code": null,
    "tags": [
      "subquery"
    ]
  },
  {
    "category": "SUBQUERY",
    "level": "Intermediate",
    "question": "Why can IN be used with a subquery?",
    "answer": "D",
    "explanation": "IN compares an expression against a set of values supplied directly or by a subquery.",
    "id": "Q298",
    "options": [
      "IN only works with backups",
      "IN converts rows to dates",
      "IN requires exactly one column in every outer query",
      "The subquery can return a set of values to compare against"
    ],
    "code": null,
    "tags": [
      "subquery"
    ]
  },
  {
    "category": "SUBQUERY",
    "level": "Intermediate",
    "question": "A SQL learner asks: Why can IN be used with a subquery?",
    "answer": "C",
    "explanation": "IN compares an expression against a set of values supplied directly or by a subquery.",
    "id": "Q299",
    "options": [
      "IN converts rows to dates",
      "IN requires exactly one column in every outer query",
      "The subquery can return a set of values to compare against",
      "IN only works with backups"
    ],
    "code": null,
    "tags": [
      "subquery"
    ]
  },
  {
    "category": "SUBQUERY",
    "level": "Intermediate",
    "question": "In WHERE Rate > (SELECT AVG(Rate) ...), what does the inner query supply?",
    "answer": "A",
    "explanation": "The scalar subquery calculates the average used by the outer comparison.",
    "id": "Q300",
    "options": [
      "The average Rate value",
      "Every employee row",
      "A table backup",
      "The maximum ProductID"
    ],
    "code": null,
    "tags": [
      "subquery"
    ]
  },
  {
    "category": "SUBQUERY",
    "level": "Intermediate",
    "question": "A SQL learner asks: In WHERE Rate > (SELECT AVG(Rate) ...), what does the inner query supply?",
    "answer": "D",
    "explanation": "The scalar subquery calculates the average used by the outer comparison.",
    "id": "Q301",
    "options": [
      "Every employee row",
      "A table backup",
      "The maximum ProductID",
      "The average Rate value"
    ],
    "code": null,
    "tags": [
      "subquery"
    ]
  },
  {
    "category": "SUBQUERY",
    "level": "Advanced",
    "question": "What does EXISTS test?",
    "answer": "B",
    "explanation": "EXISTS evaluates to true when its subquery finds at least one row.",
    "id": "Q302",
    "options": [
      "Whether a column is numeric",
      "Whether the subquery returns at least one row",
      "Whether every row is duplicated",
      "Whether a backup exists on disk"
    ],
    "code": null,
    "tags": [
      "subquery"
    ]
  },
  {
    "category": "SUBQUERY",
    "level": "Advanced",
    "question": "A SQL learner asks: What does EXISTS test?",
    "answer": "A",
    "explanation": "EXISTS evaluates to true when its subquery finds at least one row.",
    "id": "Q303",
    "options": [
      "Whether the subquery returns at least one row",
      "Whether every row is duplicated",
      "Whether a backup exists on disk",
      "Whether a column is numeric"
    ],
    "code": null,
    "tags": [
      "subquery"
    ]
  },
  {
    "category": "SUBQUERY",
    "level": "Advanced",
    "question": "Why is SELECT 1 commonly used inside EXISTS?",
    "answer": "C",
    "explanation": "EXISTS cares about row existence, so the selected expression is not the main concern.",
    "id": "Q304",
    "options": [
      "It sorts the subquery",
      "It converts rows to integers",
      "The existence test only needs to know whether a row is returned",
      "The number 1 is always the matching key"
    ],
    "code": null,
    "tags": [
      "subquery"
    ]
  },
  {
    "category": "SUBQUERY",
    "level": "Advanced",
    "question": "A SQL learner asks: Why is SELECT 1 commonly used inside EXISTS?",
    "answer": "B",
    "explanation": "EXISTS cares about row existence, so the selected expression is not the main concern.",
    "id": "Q305",
    "options": [
      "It converts rows to integers",
      "The existence test only needs to know whether a row is returned",
      "The number 1 is always the matching key",
      "It sorts the subquery"
    ],
    "code": null,
    "tags": [
      "subquery"
    ]
  },
  {
    "category": "SUBQUERY",
    "level": "Advanced",
    "question": "What is a correlated subquery?",
    "answer": "D",
    "explanation": "A correlated subquery depends on values from the current outer row.",
    "id": "Q306",
    "options": [
      "A query that always uses UNION",
      "A query with no WHERE clause",
      "A backup query that runs once",
      "A subquery that references a column from the outer query"
    ],
    "code": null,
    "tags": [
      "subquery"
    ]
  },
  {
    "category": "SUBQUERY",
    "level": "Advanced",
    "question": "A SQL learner asks: What is a correlated subquery?",
    "answer": "C",
    "explanation": "A correlated subquery depends on values from the current outer row.",
    "id": "Q307",
    "options": [
      "A query with no WHERE clause",
      "A backup query that runs once",
      "A subquery that references a column from the outer query",
      "A query that always uses UNION"
    ],
    "code": null,
    "tags": [
      "subquery"
    ]
  },
  {
    "category": "SUBQUERY",
    "level": "Advanced",
    "question": "In the correlated purchase-order example, what links the inner and outer queries?",
    "answer": "A",
    "explanation": "The matching PurchaseOrderID correlates each detail calculation with its current header row.",
    "id": "Q308",
    "options": [
      "pod.PurchaseOrderID = poh.PurchaseOrderID",
      "TaxAmt = OrderQty",
      "OrderDate = UnitPrice",
      "Name = ProductID"
    ],
    "code": null,
    "tags": [
      "subquery"
    ]
  },
  {
    "category": "SUBQUERY",
    "level": "Advanced",
    "question": "A SQL learner asks: In the correlated purchase-order example, what links the inner and outer queries?",
    "answer": "D",
    "explanation": "The matching PurchaseOrderID correlates each detail calculation with its current header row.",
    "id": "Q309",
    "options": [
      "TaxAmt = OrderQty",
      "OrderDate = UnitPrice",
      "Name = ProductID",
      "pod.PurchaseOrderID = poh.PurchaseOrderID"
    ],
    "code": null,
    "tags": [
      "subquery"
    ]
  },
  {
    "category": "SUBQUERY",
    "level": "Advanced",
    "question": "What does a nested subquery mean in the Bikes example?",
    "answer": "B",
    "explanation": "The Bikes example nests an inner category lookup inside a subcategory lookup.",
    "id": "Q310",
    "options": [
      "The query is converted to a backup",
      "One subquery is placed inside another subquery",
      "The query contains only one SELECT",
      "The query uses no WHERE clause"
    ],
    "code": null,
    "tags": [
      "subquery"
    ]
  },
  {
    "category": "SUBQUERY",
    "level": "Advanced",
    "question": "A SQL learner asks: What does a nested subquery mean in the Bikes example?",
    "answer": "A",
    "explanation": "The Bikes example nests an inner category lookup inside a subcategory lookup.",
    "id": "Q311",
    "options": [
      "One subquery is placed inside another subquery",
      "The query contains only one SELECT",
      "The query uses no WHERE clause",
      "The query is converted to a backup"
    ],
    "code": null,
    "tags": [
      "subquery"
    ]
  },
  {
    "category": "SUBQUERY",
    "level": "Advanced",
    "question": "Which AdventureWorks path is followed by the nested Bikes example?",
    "answer": "C",
    "explanation": "The nested query follows the product, subcategory, and category relationships.",
    "id": "Q312",
    "options": [
      "Customer → SalesOrderHeader → Product",
      "Employee → Department → Vendor",
      "Product → ProductSubcategory → ProductCategory",
      "Vendor → Product → Employee"
    ],
    "code": null,
    "tags": [
      "subquery"
    ]
  },
  {
    "category": "SUBQUERY",
    "level": "Advanced",
    "question": "A SQL learner asks: Which AdventureWorks path is followed by the nested Bikes example?",
    "answer": "B",
    "explanation": "The nested query follows the product, subcategory, and category relationships.",
    "id": "Q313",
    "options": [
      "Employee → Department → Vendor",
      "Product → ProductSubcategory → ProductCategory",
      "Vendor → Product → Employee",
      "Customer → SalesOrderHeader → Product"
    ],
    "code": null,
    "tags": [
      "subquery"
    ]
  },
  {
    "category": "SUBQUERY",
    "level": "Advanced",
    "question": "What does ANY mean when used with a comparison and subquery?",
    "answer": "D",
    "explanation": "ANY succeeds when the comparison is satisfied by at least one value in the returned set.",
    "id": "Q314",
    "options": [
      "It must hold for every value",
      "It always means equality",
      "It ignores the subquery",
      "The comparison is true if it holds for at least one returned value"
    ],
    "code": null,
    "tags": [
      "subquery"
    ]
  },
  {
    "category": "SUBQUERY",
    "level": "Advanced",
    "question": "A SQL learner asks: What does ANY mean when used with a comparison and subquery?",
    "answer": "C",
    "explanation": "ANY succeeds when the comparison is satisfied by at least one value in the returned set.",
    "id": "Q315",
    "options": [
      "It always means equality",
      "It ignores the subquery",
      "The comparison is true if it holds for at least one returned value",
      "It must hold for every value"
    ],
    "code": null,
    "tags": [
      "subquery"
    ]
  },
  {
    "category": "SUBQUERY",
    "level": "Advanced",
    "question": "What does ALL mean with a comparison and subquery?",
    "answer": "A",
    "explanation": "ALL requires the comparison to be true for every value produced by the subquery.",
    "id": "Q316",
    "options": [
      "The comparison must hold for every returned value",
      "Only one value must match",
      "It returns the first row only",
      "It removes duplicates from the table"
    ],
    "code": null,
    "tags": [
      "subquery"
    ]
  },
  {
    "category": "SUBQUERY",
    "level": "Advanced",
    "question": "A SQL learner asks: What does ALL mean with a comparison and subquery?",
    "answer": "D",
    "explanation": "ALL requires the comparison to be true for every value produced by the subquery.",
    "id": "Q317",
    "options": [
      "Only one value must match",
      "It returns the first row only",
      "It removes duplicates from the table",
      "The comparison must hold for every returned value"
    ],
    "code": null,
    "tags": [
      "subquery"
    ]
  },
  {
    "category": "SUBQUERY",
    "level": "Expert",
    "question": "What does WHERE column > ANY (subquery) conceptually mean?",
    "answer": "B",
    "explanation": "The ANY quantifier requires the comparison to succeed for at least one value.",
    "id": "Q318",
    "options": [
      "The subquery must return no rows",
      "The column is greater than at least one value returned by the subquery",
      "The column is greater than every returned value",
      "The column must equal every value"
    ],
    "code": null,
    "tags": [
      "subquery"
    ]
  },
  {
    "category": "SUBQUERY",
    "level": "Expert",
    "question": "A SQL learner asks: What does WHERE column > ANY (subquery) conceptually mean?",
    "answer": "A",
    "explanation": "The ANY quantifier requires the comparison to succeed for at least one value.",
    "id": "Q319",
    "options": [
      "The column is greater than at least one value returned by the subquery",
      "The column is greater than every returned value",
      "The column must equal every value",
      "The subquery must return no rows"
    ],
    "code": null,
    "tags": [
      "subquery"
    ]
  },
  {
    "category": "SUBQUERY",
    "level": "Expert",
    "question": "What does WHERE column > ALL (subquery) conceptually mean?",
    "answer": "C",
    "explanation": "The ALL quantifier requires the comparison to succeed against every returned value.",
    "id": "Q320",
    "options": [
      "The column must be NULL",
      "The subquery is ignored",
      "The column is greater than every value returned by the subquery",
      "The column is greater than one value only"
    ],
    "code": null,
    "tags": [
      "subquery"
    ]
  },
  {
    "category": "SUBQUERY",
    "level": "Expert",
    "question": "A SQL learner asks: What does WHERE column > ALL (subquery) conceptually mean?",
    "answer": "B",
    "explanation": "The ALL quantifier requires the comparison to succeed against every returned value.",
    "id": "Q321",
    "options": [
      "The subquery is ignored",
      "The column is greater than every value returned by the subquery",
      "The column is greater than one value only",
      "The column must be NULL"
    ],
    "code": null,
    "tags": [
      "subquery"
    ]
  },
  {
    "category": "SET OPERATORS",
    "level": "Intermediate",
    "question": "What does UNION do to compatible result sets?",
    "answer": "D",
    "explanation": "UNION combines result sets vertically and removes duplicate rows.",
    "id": "Q322",
    "options": [
      "Combines columns horizontally",
      "Keeps every duplicate row",
      "Updates both source tables",
      "Combines rows and removes duplicate rows"
    ],
    "code": null,
    "tags": [
      "set-operators"
    ]
  },
  {
    "category": "SET OPERATORS",
    "level": "Intermediate",
    "question": "A SQL learner asks: What does UNION do to compatible result sets?",
    "answer": "C",
    "explanation": "UNION combines result sets vertically and removes duplicate rows.",
    "id": "Q323",
    "options": [
      "Keeps every duplicate row",
      "Updates both source tables",
      "Combines rows and removes duplicate rows",
      "Combines columns horizontally"
    ],
    "code": null,
    "tags": [
      "set-operators"
    ]
  },
  {
    "category": "SET OPERATORS",
    "level": "Intermediate",
    "question": "What does UNION ALL do differently from UNION?",
    "answer": "A",
    "explanation": "UNION ALL combines the result sets without removing duplicates.",
    "id": "Q324",
    "options": [
      "It retains duplicate rows",
      "It removes all duplicates",
      "It joins tables by a key",
      "It sorts descending automatically"
    ],
    "code": null,
    "tags": [
      "set-operators"
    ]
  },
  {
    "category": "SET OPERATORS",
    "level": "Intermediate",
    "question": "A SQL learner asks: What does UNION ALL do differently from UNION?",
    "answer": "D",
    "explanation": "UNION ALL combines the result sets without removing duplicates.",
    "id": "Q325",
    "options": [
      "It removes all duplicates",
      "It joins tables by a key",
      "It sorts descending automatically",
      "It retains duplicate rows"
    ],
    "code": null,
    "tags": [
      "set-operators"
    ]
  },
  {
    "category": "SET OPERATORS",
    "level": "Intermediate",
    "question": "What does INTERSECT return?",
    "answer": "B",
    "explanation": "INTERSECT returns the overlap between the two compatible result sets.",
    "id": "Q326",
    "options": [
      "Columns from both tables",
      "Rows common to both result sets",
      "Rows only in the first set",
      "All rows with duplicates"
    ],
    "code": null,
    "tags": [
      "set-operators"
    ]
  },
  {
    "category": "SET OPERATORS",
    "level": "Intermediate",
    "question": "A SQL learner asks: What does INTERSECT return?",
    "answer": "A",
    "explanation": "INTERSECT returns the overlap between the two compatible result sets.",
    "id": "Q327",
    "options": [
      "Rows common to both result sets",
      "Rows only in the first set",
      "All rows with duplicates",
      "Columns from both tables"
    ],
    "code": null,
    "tags": [
      "set-operators"
    ]
  },
  {
    "category": "SET OPERATORS",
    "level": "Intermediate",
    "question": "What does EXCEPT return?",
    "answer": "C",
    "explanation": "EXCEPT returns rows found in the first query but not in the second.",
    "id": "Q328",
    "options": [
      "Rows only from the second",
      "All duplicate rows",
      "Rows from the first result set that are absent from the second",
      "Rows common to both"
    ],
    "code": null,
    "tags": [
      "set-operators"
    ]
  },
  {
    "category": "SET OPERATORS",
    "level": "Intermediate",
    "question": "A SQL learner asks: What does EXCEPT return?",
    "answer": "B",
    "explanation": "EXCEPT returns rows found in the first query but not in the second.",
    "id": "Q329",
    "options": [
      "All duplicate rows",
      "Rows from the first result set that are absent from the second",
      "Rows common to both",
      "Rows only from the second"
    ],
    "code": null,
    "tags": [
      "set-operators"
    ]
  },
  {
    "category": "SET OPERATORS",
    "level": "Advanced",
    "question": "What structural rule applies to both SELECT statements in a set operation?",
    "answer": "D",
    "explanation": "Set operators require compatible result shapes, including the same column count.",
    "id": "Q330",
    "options": [
      "They must use the same table name",
      "They must have identical WHERE clauses",
      "They must return different numbers of rows",
      "They must return the same number of columns"
    ],
    "code": null,
    "tags": [
      "set-operators"
    ]
  },
  {
    "category": "SET OPERATORS",
    "level": "Advanced",
    "question": "A SQL learner asks: What structural rule applies to both SELECT statements in a set operation?",
    "answer": "C",
    "explanation": "Set operators require compatible result shapes, including the same column count.",
    "id": "Q331",
    "options": [
      "They must have identical WHERE clauses",
      "They must return different numbers of rows",
      "They must return the same number of columns",
      "They must use the same table name"
    ],
    "code": null,
    "tags": [
      "set-operators"
    ]
  },
  {
    "category": "SET OPERATORS",
    "level": "Advanced",
    "question": "What must corresponding columns in a UNION generally have?",
    "answer": "A",
    "explanation": "Corresponding columns need compatible data types for the set operation.",
    "id": "Q332",
    "options": [
      "Compatible data types",
      "Different data types",
      "Only date values",
      "Only text values"
    ],
    "code": null,
    "tags": [
      "set-operators"
    ]
  },
  {
    "category": "SET OPERATORS",
    "level": "Advanced",
    "question": "A SQL learner asks: What must corresponding columns in a UNION generally have?",
    "answer": "D",
    "explanation": "Corresponding columns need compatible data types for the set operation.",
    "id": "Q333",
    "options": [
      "Different data types",
      "Only date values",
      "Only text values",
      "Compatible data types"
    ],
    "code": null,
    "tags": [
      "set-operators"
    ]
  },
  {
    "category": "SET OPERATORS",
    "level": "Advanced",
    "question": "In a UNION result, where do column names come from?",
    "answer": "B",
    "explanation": "The result column names are taken from the first query in the set expression.",
    "id": "Q334",
    "options": [
      "The ORDER BY clause",
      "The first SELECT",
      "The last SELECT",
      "Both SELECTs merged alphabetically"
    ],
    "code": null,
    "tags": [
      "set-operators"
    ]
  },
  {
    "category": "SET OPERATORS",
    "level": "Advanced",
    "question": "A SQL learner asks: In a UNION result, where do column names come from?",
    "answer": "A",
    "explanation": "The result column names are taken from the first query in the set expression.",
    "id": "Q335",
    "options": [
      "The first SELECT",
      "The last SELECT",
      "Both SELECTs merged alphabetically",
      "The ORDER BY clause"
    ],
    "code": null,
    "tags": [
      "set-operators"
    ]
  },
  {
    "category": "JOINS",
    "level": "Intermediate",
    "question": "What does a JOIN primarily combine?",
    "answer": "C",
    "explanation": "JOIN combines columns from related rows based on a join condition.",
    "id": "Q336",
    "options": [
      "Backup files",
      "Unrelated databases only",
      "Columns from related rows in two or more tables",
      "Only duplicate rows in one table"
    ],
    "code": null,
    "tags": [
      "joins"
    ]
  },
  {
    "category": "JOINS",
    "level": "Intermediate",
    "question": "A SQL learner asks: What does a JOIN primarily combine?",
    "answer": "B",
    "explanation": "JOIN combines columns from related rows based on a join condition.",
    "id": "Q337",
    "options": [
      "Unrelated databases only",
      "Columns from related rows in two or more tables",
      "Only duplicate rows in one table",
      "Backup files"
    ],
    "code": null,
    "tags": [
      "joins"
    ]
  },
  {
    "category": "JOINS",
    "level": "Intermediate",
    "question": "What relationship is commonly used to join AdventureWorks tables?",
    "answer": "D",
    "explanation": "Related tables commonly share a key relationship such as primary key to foreign key.",
    "id": "Q338",
    "options": [
      "Two unrelated text descriptions",
      "Two backup filenames",
      "Two aggregate results",
      "A primary-key/foreign-key relationship"
    ],
    "code": null,
    "tags": [
      "joins"
    ]
  },
  {
    "category": "JOINS",
    "level": "Intermediate",
    "question": "A SQL learner asks: What relationship is commonly used to join AdventureWorks tables?",
    "answer": "C",
    "explanation": "Related tables commonly share a key relationship such as primary key to foreign key.",
    "id": "Q339",
    "options": [
      "Two backup filenames",
      "Two aggregate results",
      "A primary-key/foreign-key relationship",
      "Two unrelated text descriptions"
    ],
    "code": null,
    "tags": [
      "joins"
    ]
  },
  {
    "category": "JOINS",
    "level": "Intermediate",
    "question": "What keyword defines the relationship condition in an explicit join?",
    "answer": "A",
    "explanation": "The ON clause specifies how rows from the joined sources are matched.",
    "id": "Q340",
    "options": [
      "ON",
      "WITH",
      "BY",
      "HAVING"
    ],
    "code": null,
    "tags": [
      "joins"
    ]
  },
  {
    "category": "JOINS",
    "level": "Intermediate",
    "question": "A SQL learner asks: What keyword defines the relationship condition in an explicit join?",
    "answer": "D",
    "explanation": "The ON clause specifies how rows from the joined sources are matched.",
    "id": "Q341",
    "options": [
      "WITH",
      "BY",
      "HAVING",
      "ON"
    ],
    "code": null,
    "tags": [
      "joins"
    ]
  },
  {
    "category": "JOINS",
    "level": "Intermediate",
    "question": "What is an explicit join?",
    "answer": "B",
    "explanation": "Explicit joins use JOIN and ON to state the table relationship clearly.",
    "id": "Q342",
    "options": [
      "A backup restore command",
      "A JOIN ... ON expression that states the relationship directly",
      "A comma join with no condition",
      "A UNION statement"
    ],
    "code": null,
    "tags": [
      "joins"
    ]
  },
  {
    "category": "JOINS",
    "level": "Intermediate",
    "question": "A SQL learner asks: What is an explicit join?",
    "answer": "A",
    "explanation": "Explicit joins use JOIN and ON to state the table relationship clearly.",
    "id": "Q343",
    "options": [
      "A JOIN ... ON expression that states the relationship directly",
      "A comma join with no condition",
      "A UNION statement",
      "A backup restore command"
    ],
    "code": null,
    "tags": [
      "joins"
    ]
  },
  {
    "category": "JOINS",
    "level": "Intermediate",
    "question": "What is an implicit join in the study notes?",
    "answer": "C",
    "explanation": "The old-style implicit form lists sources separated by commas and puts the relationship in WHERE.",
    "id": "Q344",
    "options": [
      "A UNION ALL query",
      "A GROUP BY query",
      "Tables listed with commas in FROM and a join condition in WHERE",
      "A JOIN using only ON"
    ],
    "code": null,
    "tags": [
      "joins"
    ]
  },
  {
    "category": "JOINS",
    "level": "Intermediate",
    "question": "A SQL learner asks: What is an implicit join in the study notes?",
    "answer": "B",
    "explanation": "The old-style implicit form lists sources separated by commas and puts the relationship in WHERE.",
    "id": "Q345",
    "options": [
      "A GROUP BY query",
      "Tables listed with commas in FROM and a join condition in WHERE",
      "A JOIN using only ON",
      "A UNION ALL query"
    ],
    "code": null,
    "tags": [
      "joins"
    ]
  },
  {
    "category": "JOINS",
    "level": "Advanced",
    "question": "In the purchase-order join, which key connects PurchaseOrderDetail and PurchaseOrderHeader?",
    "answer": "D",
    "explanation": "The study example joins the purchase-order tables on PurchaseOrderID.",
    "id": "Q346",
    "options": [
      "ProductID",
      "BusinessEntityID",
      "CustomerID",
      "PurchaseOrderID"
    ],
    "code": null,
    "tags": [
      "joins"
    ]
  },
  {
    "category": "JOINS",
    "level": "Advanced",
    "question": "A SQL learner asks: In the purchase-order join, which key connects PurchaseOrderDetail and PurchaseOrderHeader?",
    "answer": "C",
    "explanation": "The study example joins the purchase-order tables on PurchaseOrderID.",
    "id": "Q347",
    "options": [
      "BusinessEntityID",
      "CustomerID",
      "PurchaseOrderID",
      "ProductID"
    ],
    "code": null,
    "tags": [
      "joins"
    ]
  },
  {
    "category": "JOINS",
    "level": "Advanced",
    "question": "Why are aliases such as pod and poh useful in joins?",
    "answer": "A",
    "explanation": "Aliases shorten table references and make multi-table SQL easier to read.",
    "id": "Q348",
    "options": [
      "They make long table names easier to reference",
      "They create backups",
      "They remove duplicate rows automatically",
      "They change column data types"
    ],
    "code": null,
    "tags": [
      "joins"
    ]
  },
  {
    "category": "JOINS",
    "level": "Advanced",
    "question": "A SQL learner asks: Why are aliases such as pod and poh useful in joins?",
    "answer": "D",
    "explanation": "Aliases shorten table references and make multi-table SQL easier to read.",
    "id": "Q349",
    "options": [
      "They create backups",
      "They remove duplicate rows automatically",
      "They change column data types",
      "They make long table names easier to reference"
    ],
    "code": null,
    "tags": [
      "joins"
    ]
  },
  {
    "category": "BACKUP",
    "level": "Beginner",
    "question": "Which workload is described as handling daily transactions?",
    "answer": "B",
    "explanation": "OLTP systems handle frequent operational transactions such as orders and payments.",
    "id": "Q350",
    "options": [
      "Static archive",
      "OLTP",
      "Data Warehouse",
      "Lightweight database"
    ],
    "code": null,
    "tags": [
      "backup"
    ]
  },
  {
    "category": "BACKUP",
    "level": "Beginner",
    "question": "A SQL learner asks: Which workload is described as handling daily transactions?",
    "answer": "A",
    "explanation": "OLTP systems handle frequent operational transactions such as orders and payments.",
    "id": "Q351",
    "options": [
      "OLTP",
      "Data Warehouse",
      "Lightweight database",
      "Static archive"
    ],
    "code": null,
    "tags": [
      "backup"
    ]
  },
  {
    "category": "BACKUP",
    "level": "Beginner",
    "question": "Which workload is focused on reporting and analytics?",
    "answer": "C",
    "explanation": "The notes describe data warehouses as supporting reporting and analytics.",
    "id": "Q352",
    "options": [
      "Lightweight database",
      "Transaction log only",
      "Data Warehouse",
      "OLTP"
    ],
    "code": null,
    "tags": [
      "backup"
    ]
  },
  {
    "category": "BACKUP",
    "level": "Beginner",
    "question": "A SQL learner asks: Which workload is focused on reporting and analytics?",
    "answer": "B",
    "explanation": "The notes describe data warehouses as supporting reporting and analytics.",
    "id": "Q353",
    "options": [
      "Transaction log only",
      "Data Warehouse",
      "OLTP",
      "Lightweight database"
    ],
    "code": null,
    "tags": [
      "backup"
    ]
  },
  {
    "category": "BACKUP",
    "level": "Beginner",
    "question": "Which workload is described as small and simple?",
    "answer": "D",
    "explanation": "The notes describe lightweight databases as small/simple applications.",
    "id": "Q354",
    "options": [
      "OLTP",
      "Data Warehouse",
      "Enterprise data warehouse only",
      "Lightweight Database"
    ],
    "code": null,
    "tags": [
      "backup"
    ]
  },
  {
    "category": "BACKUP",
    "level": "Beginner",
    "question": "A SQL learner asks: Which workload is described as small and simple?",
    "answer": "C",
    "explanation": "The notes describe lightweight databases as small/simple applications.",
    "id": "Q355",
    "options": [
      "Data Warehouse",
      "Enterprise data warehouse only",
      "Lightweight Database",
      "OLTP"
    ],
    "code": null,
    "tags": [
      "backup"
    ]
  },
  {
    "category": "BACKUP",
    "level": "Intermediate",
    "question": "Which backup combination is emphasized for OLTP?",
    "answer": "A",
    "explanation": "The notes emphasize frequent protection for transaction-heavy OLTP workloads.",
    "id": "Q356",
    "options": [
      "Full + differential + transaction log",
      "Snapshot only",
      "Export only",
      "Full once a year"
    ],
    "code": null,
    "tags": [
      "backup"
    ]
  },
  {
    "category": "BACKUP",
    "level": "Intermediate",
    "question": "A SQL learner asks: Which backup combination is emphasized for OLTP?",
    "answer": "D",
    "explanation": "The notes emphasize frequent protection for transaction-heavy OLTP workloads.",
    "id": "Q357",
    "options": [
      "Snapshot only",
      "Export only",
      "Full once a year",
      "Full + differential + transaction log"
    ],
    "code": null,
    "tags": [
      "backup"
    ]
  },
  {
    "category": "BACKUP",
    "level": "Intermediate",
    "question": "Why is transaction log backup important for OLTP?",
    "answer": "B",
    "explanation": "Frequent log backups help preserve transaction history between larger backups.",
    "id": "Q358",
    "options": [
      "It removes all database indexes",
      "It helps protect recent transactions and supports point-in-time recovery",
      "It replaces every full backup",
      "It is only used for analytics"
    ],
    "code": null,
    "tags": [
      "backup"
    ]
  },
  {
    "category": "BACKUP",
    "level": "Intermediate",
    "question": "A SQL learner asks: Why is transaction log backup important for OLTP?",
    "answer": "A",
    "explanation": "Frequent log backups help preserve transaction history between larger backups.",
    "id": "Q359",
    "options": [
      "It helps protect recent transactions and supports point-in-time recovery",
      "It replaces every full backup",
      "It is only used for analytics",
      "It removes all database indexes"
    ],
    "code": null,
    "tags": [
      "backup"
    ]
  },
  {
    "category": "BACKUP",
    "level": "Intermediate",
    "question": "Which recovery capability is commonly required for OLTP in the study table?",
    "answer": "C",
    "explanation": "OLTP often requires the ability to recover to a specific time to minimize transaction loss.",
    "id": "Q360",
    "options": [
      "Only manual export",
      "Only schema comparison",
      "Point-in-time recovery",
      "No recovery"
    ],
    "code": null,
    "tags": [
      "backup"
    ]
  },
  {
    "category": "BACKUP",
    "level": "Intermediate",
    "question": "A SQL learner asks: Which recovery capability is commonly required for OLTP in the study table?",
    "answer": "B",
    "explanation": "OLTP often requires the ability to recover to a specific time to minimize transaction loss.",
    "id": "Q361",
    "options": [
      "Only schema comparison",
      "Point-in-time recovery",
      "No recovery",
      "Only manual export"
    ],
    "code": null,
    "tags": [
      "backup"
    ]
  },
  {
    "category": "BACKUP",
    "level": "Advanced",
    "question": "Which workload is described as commonly using daily or periodic backups rather than frequent transaction-log protection?",
    "answer": "D",
    "explanation": "The notes describe warehouse backup activity as daily/periodic and transaction-log protection as less central.",
    "id": "Q362",
    "options": [
      "OLTP",
      "Lightweight database",
      "Only temp tables",
      "Data Warehouse"
    ],
    "code": null,
    "tags": [
      "backup"
    ]
  },
  {
    "category": "BACKUP",
    "level": "Advanced",
    "question": "A SQL learner asks: Which workload is described as commonly using daily or periodic backups rather than frequent transaction-log protection?",
    "answer": "C",
    "explanation": "The notes describe warehouse backup activity as daily/periodic and transaction-log protection as less central.",
    "id": "Q363",
    "options": [
      "Lightweight database",
      "Only temp tables",
      "Data Warehouse",
      "OLTP"
    ],
    "code": null,
    "tags": [
      "backup"
    ]
  },
  {
    "category": "FUNCTIONS",
    "level": "Intermediate",
    "question": "Which function rounds a numeric value to a specified number of decimal places?",
    "answer": "A",
    "explanation": "ROUND rounds a numeric expression to the requested precision.",
    "id": "Q364",
    "options": [
      "ROUND()",
      "LEN()",
      "YEAR()",
      "REPLACE()"
    ],
    "code": null,
    "tags": [
      "functions"
    ]
  },
  {
    "category": "FUNCTIONS",
    "level": "Intermediate",
    "question": "A SQL learner asks: Which function rounds a numeric value to a specified number of decimal places?",
    "answer": "D",
    "explanation": "ROUND rounds a numeric expression to the requested precision.",
    "id": "Q365",
    "options": [
      "LEN()",
      "YEAR()",
      "REPLACE()",
      "ROUND()"
    ],
    "code": null,
    "tags": [
      "functions"
    ]
  },
  {
    "category": "FUNCTIONS",
    "level": "Intermediate",
    "question": "What does CONVERT() do in the study examples?",
    "answer": "B",
    "explanation": "CONVERT changes the expression to the requested target data type.",
    "id": "Q366",
    "options": [
      "Creates a subquery",
      "Converts an expression to a specified data type",
      "Sorts a result set",
      "Groups rows"
    ],
    "code": null,
    "tags": [
      "functions"
    ]
  },
  {
    "category": "FUNCTIONS",
    "level": "Intermediate",
    "question": "A SQL learner asks: What does CONVERT() do in the study examples?",
    "answer": "A",
    "explanation": "CONVERT changes the expression to the requested target data type.",
    "id": "Q367",
    "options": [
      "Converts an expression to a specified data type",
      "Sorts a result set",
      "Groups rows",
      "Creates a subquery"
    ],
    "code": null,
    "tags": [
      "functions"
    ]
  },
  {
    "category": "FUNCTIONS",
    "level": "Intermediate",
    "question": "Which function can classify a condition into two outcomes directly?",
    "answer": "C",
    "explanation": "IIF evaluates a Boolean condition and returns one of two expressions.",
    "id": "Q368",
    "options": [
      "CHARINDEX()",
      "DATALENGTH()",
      "IIF()",
      "COUNT()"
    ],
    "code": null,
    "tags": [
      "functions"
    ]
  },
  {
    "category": "FUNCTIONS",
    "level": "Intermediate",
    "question": "A SQL learner asks: Which function can classify a condition into two outcomes directly?",
    "answer": "B",
    "explanation": "IIF evaluates a Boolean condition and returns one of two expressions.",
    "id": "Q369",
    "options": [
      "DATALENGTH()",
      "IIF()",
      "COUNT()",
      "CHARINDEX()"
    ],
    "code": null,
    "tags": [
      "functions"
    ]
  },
  {
    "category": "FUNCTIONS",
    "level": "Intermediate",
    "question": "Which function returns the first non-NULL value in a list?",
    "answer": "D",
    "explanation": "COALESCE returns the first expression in its list that is not NULL.",
    "id": "Q370",
    "options": [
      "NULLIF()",
      "REVERSE()",
      "DATEADD()",
      "COALESCE()"
    ],
    "code": null,
    "tags": [
      "functions"
    ]
  },
  {
    "category": "FUNCTIONS",
    "level": "Intermediate",
    "question": "A SQL learner asks: Which function returns the first non-NULL value in a list?",
    "answer": "C",
    "explanation": "COALESCE returns the first expression in its list that is not NULL.",
    "id": "Q371",
    "options": [
      "REVERSE()",
      "DATEADD()",
      "COALESCE()",
      "NULLIF()"
    ],
    "code": null,
    "tags": [
      "functions"
    ]
  },
  {
    "category": "FUNCTIONS",
    "level": "Intermediate",
    "question": "Which function returns NULL when its two arguments are equal?",
    "answer": "A",
    "explanation": "NULLIF compares its two arguments and returns NULL when they are equal.",
    "id": "Q372",
    "options": [
      "NULLIF()",
      "COALESCE()",
      "ISNULL()",
      "ROUND()"
    ],
    "code": null,
    "tags": [
      "functions"
    ]
  },
  {
    "category": "FUNCTIONS",
    "level": "Intermediate",
    "question": "A SQL learner asks: Which function returns NULL when its two arguments are equal?",
    "answer": "D",
    "explanation": "NULLIF compares its two arguments and returns NULL when they are equal.",
    "id": "Q373",
    "options": [
      "COALESCE()",
      "ISNULL()",
      "ROUND()",
      "NULLIF()"
    ],
    "code": null,
    "tags": [
      "functions"
    ]
  },
  {
    "category": "NUMERICAL",
    "level": "Intermediate",
    "question": "Which expression calculates the total of ListPrice values?",
    "answer": "B",
    "explanation": "SUM adds numeric ListPrice values across the qualifying rows.",
    "id": "Q374",
    "options": [
      "LEN(ListPrice)",
      "SUM(ListPrice)",
      "COUNT(ListPrice)",
      "AVG(ListPrice)"
    ],
    "code": null,
    "tags": [
      "numerical"
    ]
  },
  {
    "category": "NUMERICAL",
    "level": "Intermediate",
    "question": "A SQL learner asks: Which expression calculates the total of ListPrice values?",
    "answer": "A",
    "explanation": "SUM adds numeric ListPrice values across the qualifying rows.",
    "id": "Q375",
    "options": [
      "SUM(ListPrice)",
      "COUNT(ListPrice)",
      "AVG(ListPrice)",
      "LEN(ListPrice)"
    ],
    "code": null,
    "tags": [
      "numerical"
    ]
  },
  {
    "category": "NUMERICAL",
    "level": "Intermediate",
    "question": "Which expression calculates the average ListPrice?",
    "answer": "C",
    "explanation": "AVG computes the arithmetic mean of the numeric ListPrice values.",
    "id": "Q376",
    "options": [
      "MAX(ListPrice)",
      "COUNT(ListPrice)",
      "AVG(ListPrice)",
      "SUM(ListPrice)"
    ],
    "code": null,
    "tags": [
      "numerical"
    ]
  },
  {
    "category": "NUMERICAL",
    "level": "Intermediate",
    "question": "A SQL learner asks: Which expression calculates the average ListPrice?",
    "answer": "B",
    "explanation": "AVG computes the arithmetic mean of the numeric ListPrice values.",
    "id": "Q377",
    "options": [
      "COUNT(ListPrice)",
      "AVG(ListPrice)",
      "SUM(ListPrice)",
      "MAX(ListPrice)"
    ],
    "code": null,
    "tags": [
      "numerical"
    ]
  },
  {
    "category": "CONCAT",
    "level": "Intermediate",
    "question": "Which function combines Hello and World into one string?",
    "answer": "D",
    "explanation": "CONCAT combines multiple expressions into one string.",
    "id": "Q378",
    "options": [
      "DATEDIFF()",
      "COUNT()",
      "ROUND()",
      "CONCAT()"
    ],
    "code": null,
    "tags": [
      "concat"
    ]
  },
  {
    "category": "CONCAT",
    "level": "Intermediate",
    "question": "A SQL learner asks: Which function combines Hello and World into one string?",
    "answer": "C",
    "explanation": "CONCAT combines multiple expressions into one string.",
    "id": "Q379",
    "options": [
      "COUNT()",
      "ROUND()",
      "CONCAT()",
      "DATEDIFF()"
    ],
    "code": null,
    "tags": [
      "concat"
    ]
  },
  {
    "category": "CONCAT",
    "level": "Intermediate",
    "question": "What does CONCAT_WS('-', '2026', '09', '30') use between the values?",
    "answer": "A",
    "explanation": "CONCAT_WS uses the first argument as the separator between the remaining values.",
    "id": "Q380",
    "options": [
      "A hyphen",
      "A comma",
      "A space",
      "A slash"
    ],
    "code": null,
    "tags": [
      "concat"
    ]
  },
  {
    "category": "CONCAT",
    "level": "Intermediate",
    "question": "A SQL learner asks: What does CONCAT_WS('-', '2026', '09', '30') use between the values?",
    "answer": "D",
    "explanation": "CONCAT_WS uses the first argument as the separator between the remaining values.",
    "id": "Q381",
    "options": [
      "A comma",
      "A space",
      "A slash",
      "A hyphen"
    ],
    "code": null,
    "tags": [
      "concat"
    ]
  },
  {
    "category": "CONCAT",
    "level": "Intermediate",
    "question": "Which expression can build a full name from FirstName and LastName?",
    "answer": "B",
    "explanation": "CONCAT can combine the name parts and an explicit space into one string.",
    "id": "Q382",
    "options": [
      "AVG(FirstName, LastName)",
      "CONCAT(FirstName, ' ', LastName)",
      "DATEADD(FirstName, LastName)",
      "COUNT(FirstName, LastName)"
    ],
    "code": null,
    "tags": [
      "concat"
    ]
  },
  {
    "category": "CONCAT",
    "level": "Intermediate",
    "question": "A SQL learner asks: Which expression can build a full name from FirstName and LastName?",
    "answer": "A",
    "explanation": "CONCAT can combine the name parts and an explicit space into one string.",
    "id": "Q383",
    "options": [
      "CONCAT(FirstName, ' ', LastName)",
      "DATEADD(FirstName, LastName)",
      "COUNT(FirstName, LastName)",
      "AVG(FirstName, LastName)"
    ],
    "code": null,
    "tags": [
      "concat"
    ]
  },
  {
    "category": "ARITHMETIC",
    "level": "Beginner",
    "question": "What does the + operator do with two numeric SQL expressions?",
    "answer": "C",
    "explanation": "For numeric expressions, + performs addition.",
    "id": "Q384",
    "options": [
      "Divides them",
      "Rounds them",
      "Adds them",
      "Subtracts them"
    ],
    "code": null,
    "tags": [
      "arithmetic"
    ]
  },
  {
    "category": "ARITHMETIC",
    "level": "Beginner",
    "question": "A SQL learner asks: What does the + operator do with two numeric SQL expressions?",
    "answer": "B",
    "explanation": "For numeric expressions, + performs addition.",
    "id": "Q385",
    "options": [
      "Rounds them",
      "Adds them",
      "Subtracts them",
      "Divides them"
    ],
    "code": null,
    "tags": [
      "arithmetic"
    ]
  },
  {
    "category": "ARITHMETIC",
    "level": "Beginner",
    "question": "What does the - operator do between numeric expressions?",
    "answer": "D",
    "explanation": "The minus operator performs subtraction for numeric expressions.",
    "id": "Q386",
    "options": [
      "Adds the expressions",
      "Concatenates every data type",
      "Counts rows",
      "Subtracts the right expression from the left"
    ],
    "code": null,
    "tags": [
      "arithmetic"
    ]
  },
  {
    "category": "ARITHMETIC",
    "level": "Beginner",
    "question": "A SQL learner asks: What does the - operator do between numeric expressions?",
    "answer": "C",
    "explanation": "The minus operator performs subtraction for numeric expressions.",
    "id": "Q387",
    "options": [
      "Concatenates every data type",
      "Counts rows",
      "Subtracts the right expression from the left",
      "Adds the expressions"
    ],
    "code": null,
    "tags": [
      "arithmetic"
    ]
  },
  {
    "category": "ARITHMETIC",
    "level": "Intermediate",
    "question": "Why should arithmetic expressions be checked for data type compatibility?",
    "answer": "A",
    "explanation": "SQL Server applies data-type rules when evaluating expressions, so compatible types matter.",
    "id": "Q388",
    "options": [
      "Different data types can affect conversion and the resulting operation",
      "SQL never performs conversions",
      "Arithmetic only works on text",
      "Data types matter only in backups"
    ],
    "code": null,
    "tags": [
      "arithmetic"
    ]
  },
  {
    "category": "ARITHMETIC",
    "level": "Intermediate",
    "question": "A SQL learner asks: Why should arithmetic expressions be checked for data type compatibility?",
    "answer": "D",
    "explanation": "SQL Server applies data-type rules when evaluating expressions, so compatible types matter.",
    "id": "Q389",
    "options": [
      "SQL never performs conversions",
      "Arithmetic only works on text",
      "Data types matter only in backups",
      "Different data types can affect conversion and the resulting operation"
    ],
    "code": null,
    "tags": [
      "arithmetic"
    ]
  },
  {
    "category": "PRACTICE",
    "level": "Beginner",
    "question": "To list products ordered from highest ListPrice to lowest, which pattern is appropriate?",
    "answer": "B",
    "explanation": "The study example uses SELECT from Production.Product followed by ORDER BY ListPrice DESC.",
    "id": "Q390",
    "options": [
      "SELECT ... FROM Production.Product UNION ListPrice",
      "SELECT ... FROM Production.Product ORDER BY ListPrice DESC",
      "SELECT ... FROM Production.Product GROUP BY ListPrice",
      "SELECT ... FROM Production.Product WHERE ListPrice DESC"
    ],
    "code": null,
    "tags": [
      "practice"
    ]
  },
  {
    "category": "PRACTICE",
    "level": "Beginner",
    "question": "A SQL learner asks: To list products ordered from highest ListPrice to lowest, which pattern is appropriate?",
    "answer": "A",
    "explanation": "The study example uses SELECT from Production.Product followed by ORDER BY ListPrice DESC.",
    "id": "Q391",
    "options": [
      "SELECT ... FROM Production.Product ORDER BY ListPrice DESC",
      "SELECT ... FROM Production.Product GROUP BY ListPrice",
      "SELECT ... FROM Production.Product WHERE ListPrice DESC",
      "SELECT ... FROM Production.Product UNION ListPrice"
    ],
    "code": null,
    "tags": [
      "practice"
    ]
  },
  {
    "category": "PRACTICE",
    "level": "Beginner",
    "question": "To find employee titles containing Manager anywhere in the text, which predicate matches the study approach?",
    "answer": "C",
    "explanation": "Percent wildcards on both sides allow Manager to occur anywhere in the title.",
    "id": "Q392",
    "options": [
      "JobTitle LIKE 'Manager'",
      "JobTitle LIKE '_Manager'",
      "JobTitle LIKE '%Manager%'",
      "JobTitle = 'Manager%'"
    ],
    "code": null,
    "tags": [
      "practice"
    ]
  },
  {
    "category": "PRACTICE",
    "level": "Beginner",
    "question": "A SQL learner asks: To find employee titles containing Manager anywhere in the text, which predicate matches the study approach?",
    "answer": "B",
    "explanation": "Percent wildcards on both sides allow Manager to occur anywhere in the title.",
    "id": "Q393",
    "options": [
      "JobTitle LIKE '_Manager'",
      "JobTitle LIKE '%Manager%'",
      "JobTitle = 'Manager%'",
      "JobTitle LIKE 'Manager'"
    ],
    "code": null,
    "tags": [
      "practice"
    ]
  },
  {
    "category": "PRACTICE",
    "level": "Intermediate",
    "question": "To show products whose SellEndDate exists before calculating a date difference, which filter is appropriate?",
    "answer": "D",
    "explanation": "IS NOT NULL keeps rows that contain an end date.",
    "id": "Q394",
    "options": [
      "WHERE SellEndDate = NULL",
      "WHERE SellEndDate IS EMPTY",
      "WHERE SellEndDate <> 0",
      "WHERE SellEndDate IS NOT NULL"
    ],
    "code": null,
    "tags": [
      "practice"
    ]
  },
  {
    "category": "PRACTICE",
    "level": "Intermediate",
    "question": "A SQL learner asks: To show products whose SellEndDate exists before calculating a date difference, which filter is appropriate?",
    "answer": "C",
    "explanation": "IS NOT NULL keeps rows that contain an end date.",
    "id": "Q395",
    "options": [
      "WHERE SellEndDate IS EMPTY",
      "WHERE SellEndDate <> 0",
      "WHERE SellEndDate IS NOT NULL",
      "WHERE SellEndDate = NULL"
    ],
    "code": null,
    "tags": [
      "practice"
    ]
  },
  {
    "category": "PRACTICE",
    "level": "Intermediate",
    "question": "To summarize total OrderQty for each PurchaseOrderID, which concept should be used?",
    "answer": "A",
    "explanation": "The purchase-order examples use SUM with grouping to summarize quantities by order.",
    "id": "Q396",
    "options": [
      "SUM(OrderQty) with GROUP BY PurchaseOrderID",
      "ORDER BY OrderQty only",
      "UNION OrderQty",
      "COUNT(*) without grouping"
    ],
    "code": null,
    "tags": [
      "practice"
    ]
  },
  {
    "category": "PRACTICE",
    "level": "Intermediate",
    "question": "A SQL learner asks: To summarize total OrderQty for each PurchaseOrderID, which concept should be used?",
    "answer": "D",
    "explanation": "The purchase-order examples use SUM with grouping to summarize quantities by order.",
    "id": "Q397",
    "options": [
      "ORDER BY OrderQty only",
      "UNION OrderQty",
      "COUNT(*) without grouping",
      "SUM(OrderQty) with GROUP BY PurchaseOrderID"
    ],
    "code": null,
    "tags": [
      "practice"
    ]
  },
  {
    "category": "PRACTICE",
    "level": "Advanced",
    "question": "To find employees whose Rate exceeds the average Rate, which approach matches the notes?",
    "answer": "B",
    "explanation": "The study example compares Rate to a scalar AVG subquery.",
    "id": "Q398",
    "options": [
      "A LIKE pattern on Rate",
      "A scalar subquery containing AVG(Rate)",
      "A backup restore",
      "A UNION ALL of rates"
    ],
    "code": null,
    "tags": [
      "practice"
    ]
  },
  {
    "category": "PRACTICE",
    "level": "Advanced",
    "question": "A SQL learner asks: To find employees whose Rate exceeds the average Rate, which approach matches the notes?",
    "answer": "A",
    "explanation": "The study example compares Rate to a scalar AVG subquery.",
    "id": "Q399",
    "options": [
      "A scalar subquery containing AVG(Rate)",
      "A backup restore",
      "A UNION ALL of rates",
      "A LIKE pattern on Rate"
    ],
    "code": null,
    "tags": [
      "practice"
    ]
  },
  {
    "category": "PRACTICE",
    "level": "Advanced",
    "question": "To test whether a related row exists without needing its returned values, which operator is appropriate?",
    "answer": "C",
    "explanation": "EXISTS tests whether the subquery returns at least one row.",
    "id": "Q400",
    "options": [
      "ORDER BY",
      "FORMAT",
      "EXISTS",
      "UNION"
    ],
    "code": null,
    "tags": [
      "practice"
    ]
  },
  {
    "category": "PRACTICE",
    "level": "Advanced",
    "question": "A SQL learner asks: To test whether a related row exists without needing its returned values, which operator is appropriate?",
    "answer": "B",
    "explanation": "EXISTS tests whether the subquery returns at least one row.",
    "id": "Q401",
    "options": [
      "FORMAT",
      "EXISTS",
      "UNION",
      "ORDER BY"
    ],
    "code": null,
    "tags": [
      "practice"
    ]
  },
  {
    "category": "PRACTICE",
    "level": "Advanced",
    "question": "To find common IDs in two compatible result sets, which set operator is appropriate?",
    "answer": "D",
    "explanation": "INTERSECT returns rows common to both result sets.",
    "id": "Q402",
    "options": [
      "EXCEPT",
      "UNION ALL",
      "JOIN only",
      "INTERSECT"
    ],
    "code": null,
    "tags": [
      "practice"
    ]
  },
  {
    "category": "PRACTICE",
    "level": "Advanced",
    "question": "A SQL learner asks: To find common IDs in two compatible result sets, which set operator is appropriate?",
    "answer": "C",
    "explanation": "INTERSECT returns rows common to both result sets.",
    "id": "Q403",
    "options": [
      "UNION ALL",
      "JOIN only",
      "INTERSECT",
      "EXCEPT"
    ],
    "code": null,
    "tags": [
      "practice"
    ]
  },
  {
    "category": "PRACTICE",
    "level": "Advanced",
    "question": "To return rows in the first query but not the second, which set operator should be used?",
    "answer": "A",
    "explanation": "EXCEPT returns rows from the first result that are absent from the second.",
    "id": "Q404",
    "options": [
      "EXCEPT",
      "INTERSECT",
      "UNION",
      "GROUP BY"
    ],
    "code": null,
    "tags": [
      "practice"
    ]
  },
  {
    "category": "PRACTICE",
    "level": "Advanced",
    "question": "A SQL learner asks: To return rows in the first query but not the second, which set operator should be used?",
    "answer": "D",
    "explanation": "EXCEPT returns rows from the first result that are absent from the second.",
    "id": "Q405",
    "options": [
      "INTERSECT",
      "UNION",
      "GROUP BY",
      "EXCEPT"
    ],
    "code": null,
    "tags": [
      "practice"
    ]
  },
  {
    "category": "PRACTICE",
    "level": "Expert",
    "question": "To calculate each purchase order's detail quantity from the current header row, what subquery pattern is needed?",
    "answer": "B",
    "explanation": "The study example correlates pod.PurchaseOrderID with poh.PurchaseOrderID.",
    "id": "Q406",
    "options": [
      "A LIKE predicate",
      "A correlated subquery referencing the outer PurchaseOrderID",
      "An unrelated scalar subquery with no outer reference",
      "A UNION ALL only"
    ],
    "code": null,
    "tags": [
      "practice"
    ]
  },
  {
    "category": "PRACTICE",
    "level": "Expert",
    "question": "A SQL learner asks: To calculate each purchase order's detail quantity from the current header row, what subquery pattern is needed?",
    "answer": "A",
    "explanation": "The study example correlates pod.PurchaseOrderID with poh.PurchaseOrderID.",
    "id": "Q407",
    "options": [
      "A correlated subquery referencing the outer PurchaseOrderID",
      "An unrelated scalar subquery with no outer reference",
      "A UNION ALL only",
      "A LIKE predicate"
    ],
    "code": null,
    "tags": [
      "practice"
    ]
  },
  {
    "category": "PRACTICE",
    "level": "Expert",
    "question": "To trace products to categories whose name contains Bikes, what pattern is demonstrated?",
    "answer": "C",
    "explanation": "The notes show nested IN queries following Product → ProductSubcategory → ProductCategory.",
    "id": "Q408",
    "options": [
      "A backup file copy",
      "Only COUNT(*)",
      "Nested IN subqueries through ProductSubcategory and ProductCategory",
      "A single ORDER BY"
    ],
    "code": null,
    "tags": [
      "practice"
    ]
  },
  {
    "category": "PRACTICE",
    "level": "Expert",
    "question": "A SQL learner asks: To trace products to categories whose name contains Bikes, what pattern is demonstrated?",
    "answer": "B",
    "explanation": "The notes show nested IN queries following Product → ProductSubcategory → ProductCategory.",
    "id": "Q409",
    "options": [
      "Only COUNT(*)",
      "Nested IN subqueries through ProductSubcategory and ProductCategory",
      "A single ORDER BY",
      "A backup file copy"
    ],
    "code": null,
    "tags": [
      "practice"
    ]
  }
];

export const levels = [
  {
    "name": "Beginner",
    "subtitle": "Core SQL foundations",
    "topics": "SELECT, WHERE, NULL, LIKE, ORDER BY and basic aggregates"
  },
  {
    "name": "Intermediate",
    "subtitle": "Build confidence",
    "topics": "Logical operators, functions, dates, strings and grouping"
  },
  {
    "name": "Advanced",
    "subtitle": "Work like an analyst",
    "topics": "Subqueries, set operators, joins, aggregation and backup concepts"
  },
  {
    "name": "Expert",
    "subtitle": "Challenge mode",
    "topics": "Nested logic, correlated queries, advanced functions and scenario practice"
  }
];

export const tasks = [
  {
    "id": "T001",
    "level": "Beginner",
    "title": "Build a basic SELECT",
    "task": "Return BusinessEntityID, FirstName, and LastName from Person.Person.",
    "hint": "Use a comma-separated SELECT list and a FROM clause.",
    "solution": "SELECT BusinessEntityID, FirstName, LastName\nFROM Person.Person;"
  },
  {
    "id": "T002",
    "level": "Beginner",
    "title": "Filter non-US states",
    "task": "Return StateProvinceID and CountryRegionCode for rows where CountryRegionCode is not US.",
    "hint": "Use a comparison operator in WHERE.",
    "solution": "SELECT StateProvinceID, CountryRegionCode\nFROM Person.StateProvince\nWHERE CountryRegionCode <> 'US';"
  },
  {
    "id": "T003",
    "level": "Beginner",
    "title": "Find managers",
    "task": "Return employees whose JobTitle contains the word Manager.",
    "hint": "Use LIKE with % on both sides.",
    "solution": "SELECT BusinessEntityID, JobTitle\nFROM HumanResources.Employee\nWHERE JobTitle LIKE '%Manager%';"
  },
  {
    "id": "T004",
    "level": "Beginner",
    "title": "Find missing colors",
    "task": "Return products where Color is NULL.",
    "hint": "NULL is tested with a dedicated predicate.",
    "solution": "SELECT ProductID, Name, Color\nFROM Production.Product\nWHERE Color IS NULL;"
  },
  {
    "id": "T005",
    "level": "Intermediate",
    "title": "Calculate price gap",
    "task": "Return products where ListPrice - StandardCost is greater than 10.",
    "hint": "Do the arithmetic expression directly in WHERE.",
    "solution": "SELECT ProductID, Name, StandardCost, ListPrice\nFROM Production.Product\nWHERE ListPrice - StandardCost > 10;"
  },
  {
    "id": "T006",
    "level": "Intermediate",
    "title": "Group pay rates",
    "task": "Calculate SUM(Rate) for each PayFrequency.",
    "hint": "The selected category belongs in GROUP BY.",
    "solution": "SELECT PayFrequency, SUM(Rate) AS TotalRatePerPayFrequency\nFROM HumanResources.EmployeePayHistory\nGROUP BY PayFrequency;"
  },
  {
    "id": "T007",
    "level": "Intermediate",
    "title": "Sort and page",
    "task": "Return employees ordered by HireDate ascending, skip 5 rows, then fetch the next 20.",
    "hint": "OFFSET/FETCH follows ORDER BY.",
    "solution": "SELECT BusinessEntityID, NationalIDNumber, HireDate\nFROM HumanResources.Employee\nORDER BY HireDate ASC\nOFFSET 5 ROWS FETCH NEXT 20 ROWS ONLY;"
  },
  {
    "id": "T008",
    "level": "Intermediate",
    "title": "Use string functions",
    "task": "Show FirstName, its uppercase form, and its length.",
    "hint": "Use UPPER and LEN in the SELECT list.",
    "solution": "SELECT FirstName, UPPER(FirstName) AS UpperName, LEN(FirstName) AS NameLength\nFROM Person.Person;"
  },
  {
    "id": "T009",
    "level": "Intermediate",
    "title": "Add three months",
    "task": "Display SellStartDate and a date three months later.",
    "hint": "Use DATEADD with the month datepart.",
    "solution": "SELECT ProductID, SellStartDate, DATEADD(month, 3, SellStartDate) AS NewSellStartDate\nFROM Production.Product;"
  },
  {
    "id": "T010",
    "level": "Advanced",
    "title": "Employees above average rate",
    "task": "Return employees whose Rate is greater than the average Rate.",
    "hint": "The average can be supplied by a scalar subquery.",
    "solution": "SELECT BusinessEntityID, Rate\nFROM HumanResources.EmployeePayHistory\nWHERE Rate > (SELECT AVG(Rate) FROM HumanResources.EmployeePayHistory);"
  },
  {
    "id": "T011",
    "level": "Advanced",
    "title": "Find common IDs",
    "task": "Use INTERSECT to return IDs present in both two compatible result sets.",
    "hint": "Each SELECT must return the same number of compatible columns.",
    "solution": "SELECT BusinessEntityID FROM HumanResources.Employee\nINTERSECT\nSELECT BusinessEntityID FROM Person.Person;"
  },
  {
    "id": "T012",
    "level": "Advanced",
    "title": "Join purchase order data",
    "task": "Combine purchase order detail with header information using PurchaseOrderID.",
    "hint": "Use an explicit JOIN with ON.",
    "solution": "SELECT pod.PurchaseOrderID, pod.OrderQty, poh.OrderDate, poh.ShipDate\nFROM Purchasing.PurchaseOrderDetail AS pod\nJOIN Purchasing.PurchaseOrderHeader AS poh\n  ON pod.PurchaseOrderID = poh.PurchaseOrderID;"
  },
  {
    "id": "T013",
    "level": "Advanced",
    "title": "Top five recent hires",
    "task": "Return the five most recently hired employees.",
    "hint": "Sort HireDate descending and apply TOP 5.",
    "solution": "SELECT TOP 5 BusinessEntityID, NationalIDNumber, HireDate\nFROM HumanResources.Employee\nORDER BY HireDate DESC;"
  },
  {
    "id": "T014",
    "level": "Expert",
    "title": "Correlated order quantity",
    "task": "For each purchase order, calculate total OrderQty from its detail rows.",
    "hint": "The inner query should reference the current outer PurchaseOrderID.",
    "solution": "SELECT poh.PurchaseOrderID,\n       (SELECT SUM(pod.OrderQty)\n        FROM Purchasing.PurchaseOrderDetail AS pod\n        WHERE pod.PurchaseOrderID = poh.PurchaseOrderID\n        GROUP BY pod.PurchaseOrderID) AS SumOrderQty\nFROM Purchasing.PurchaseOrderHeader AS poh\nORDER BY poh.PurchaseOrderID;"
  },
  {
    "id": "T015",
    "level": "Expert",
    "title": "Nested Bikes category",
    "task": "Find ProductSubCategoryID values whose category name contains Bikes.",
    "hint": "Follow Product \u2192 ProductSubcategory \u2192 ProductCategory using nested IN subqueries.",
    "solution": "SELECT DISTINCT ProductSubCategoryID\nFROM Production.Product\nWHERE ProductSubCategoryID IN (\n  SELECT ProductSubCategoryID\n  FROM Production.ProductSubcategory\n  WHERE ProductCategoryID IN (\n    SELECT ProductCategoryID\n    FROM Production.ProductCategory\n    WHERE Name LIKE '%Bikes%'\n  )\n);"
  },
  {
    "id": "T016",
    "level": "Expert",
    "title": "Set difference",
    "task": "Return SalesOrderID values from Sales.SalesOrderDetail that are not in Sales.Customer.CustomerID.",
    "hint": "Use EXCEPT and compatible result types.",
    "solution": "SELECT SalesOrderID FROM Sales.SalesOrderDetail\nEXCEPT\nSELECT CustomerID FROM Sales.Customer;"
  }
];

export const codingTasks = [
  {id:"C001",level:"Beginner",category:"SELECT",title:"Build a Product List",task:"Write a query that returns ProductID, Name, and ListPrice from Production.Product and sorts the results by ListPrice descending.",hint:"You need a SELECT list, the AdventureWorks product table, and an ORDER BY with descending direction.",solution:"SELECT ProductID, Name, ListPrice\nFROM Production.Product\nORDER BY ListPrice DESC;",required:[{label:"Selects ProductID, Name, and ListPrice",tests:[s=>s.includes("productid")&&s.includes("name")&&s.includes("listprice")]},{label:"Uses Production.Product",tests:[s=>s.includes("production.product")]},{label:"Sorts by ListPrice descending",tests:[s=>s.includes("order by")&&s.includes("listprice")&&s.includes("desc")]}]},
  {id:"C002",level:"Beginner",category:"WHERE",title:"Filter Expensive Products",task:"Return ProductID and ListPrice for products where ListPrice is greater than 1000.",hint:"Put the numeric condition in WHERE; do not filter after sorting.",solution:"SELECT ProductID, ListPrice\nFROM Production.Product\nWHERE ListPrice > 1000;",required:[{label:"Selects ProductID and ListPrice",tests:[s=>s.includes("productid")&&s.includes("listprice")]},{label:"Uses Production.Product",tests:[s=>s.includes("production.product")]},{label:"Filters ListPrice above 1000",tests:[s=>s.includes("where")&&s.includes("listprice > 1000")]}]},
  {id:"C003",level:"Beginner",category:"LIKE",title:"Find Manager Roles",task:"Return BusinessEntityID and JobTitle for employees whose title contains the word Manager.",hint:"A wildcard on both sides lets Manager appear anywhere in the title.",solution:"SELECT BusinessEntityID, JobTitle\nFROM HumanResources.Employee\nWHERE JobTitle LIKE '%Manager%';",required:[{label:"Uses HumanResources.Employee",tests:[s=>s.includes("humanresources.employee")]},{label:"Selects BusinessEntityID and JobTitle",tests:[s=>s.includes("businessentityid")&&s.includes("jobtitle")]},{label:"Uses LIKE with Manager",tests:[s=>s.includes("like")&&s.includes("manager")&&s.includes("%")]}]},
  {id:"C004",level:"Intermediate",category:"GROUP BY",title:"Summarize Pay Frequency",task:"Calculate SUM(Rate) for each PayFrequency in EmployeePayHistory.",hint:"Every non-aggregate selected grouping column should be represented in GROUP BY.",solution:"SELECT PayFrequency, SUM(Rate) AS TotalRate\nFROM HumanResources.EmployeePayHistory\nGROUP BY PayFrequency;",required:[{label:"Uses SUM(Rate)",tests:[s=>s.includes("sum(")&&s.includes("rate")]},{label:"Uses EmployeePayHistory",tests:[s=>s.includes("humanresources.employeepayhistory")]},{label:"Groups by PayFrequency",tests:[s=>s.includes("group by")&&s.includes("payfrequency")]}]},
  {id:"C005",level:"Intermediate",category:"DATE FUNCTIONS",title:"Add Three Months",task:"Return ProductID, SellStartDate, and a calculated date three months after SellStartDate.",hint:"DATEADD takes a datepart, a number, and the original date expression.",solution:"SELECT ProductID, SellStartDate, DATEADD(month, 3, SellStartDate) AS NewDate\nFROM Production.Product;",required:[{label:"Uses DATEADD",tests:[s=>s.includes("dateadd")]},{label:"Adds three months",tests:[s=>(s.includes("month")||s.includes("mm"))&&s.includes(", 3")||s.includes(",3")]},{label:"Uses SellStartDate",tests:[s=>s.includes("sellstartdate")]},{label:"Uses Production.Product",tests:[s=>s.includes("production.product")]}]},
  {id:"C006",level:"Intermediate",category:"NULL",title:"Handle Missing Colors",task:"Return ProductID, Name, and a replacement value for NULL Color values using ISNULL.",hint:"ISNULL takes the expression first and the replacement value second.",solution:"SELECT ProductID, Name, ISNULL(Color, 'Unknown') AS ColorValue\nFROM Production.Product;",required:[{label:"Uses ISNULL",tests:[s=>s.includes("isnull")]},{label:"References Color",tests:[s=>s.includes("color")]},{label:"References ProductID and Name",tests:[s=>s.includes("productid")&&s.includes("name")]},{label:"Uses Production.Product",tests:[s=>s.includes("production.product")]}]},
  {id:"C007",level:"Advanced",category:"SUBQUERY",title:"Above Average Rate",task:"Return BusinessEntityID and Rate for employees whose Rate is greater than the average Rate.",hint:"The average can be calculated by a scalar subquery inside WHERE.",solution:"SELECT BusinessEntityID, Rate\nFROM HumanResources.EmployeePayHistory\nWHERE Rate > (SELECT AVG(Rate) FROM HumanResources.EmployeePayHistory);",required:[{label:"Uses a subquery",tests:[s=>s.includes("select")&&s.includes("(")&&s.includes(")")]},{label:"Calculates AVG(Rate)",tests:[s=>s.includes("avg(")&&s.includes("rate")]},{label:"Compares Rate with the subquery",tests:[s=>s.includes("rate >")]},{label:"Uses EmployeePayHistory",tests:[s=>s.includes("humanresources.employeepayhistory")]}]},
  {id:"C008",level:"Advanced",category:"JOIN",title:"Join Purchase Orders",task:"Join PurchaseOrderDetail to PurchaseOrderHeader using PurchaseOrderID and return order quantity and order date.",hint:"Use an explicit JOIN and connect the two aliases through the shared key.",solution:"SELECT pod.PurchaseOrderID, pod.OrderQty, poh.OrderDate\nFROM Purchasing.PurchaseOrderDetail AS pod\nJOIN Purchasing.PurchaseOrderHeader AS poh\n  ON pod.PurchaseOrderID = poh.PurchaseOrderID;",required:[{label:"Uses PurchaseOrderDetail",tests:[s=>s.includes("purchasing.purchaseorderdetail")]},{label:"Uses PurchaseOrderHeader",tests:[s=>s.includes("purchasing.purchaseorderheader")]},{label:"Uses JOIN and ON",tests:[s=>s.includes(" join ")&&s.includes(" on ")]},{label:"Joins on PurchaseOrderID",tests:[s=>s.includes("purchaseorderid")]},{label:"Returns OrderQty and OrderDate",tests:[s=>s.includes("orderqty")&&s.includes("orderdate")]}]},
  {id:"C009",level:"Advanced",category:"SET OPERATORS",title:"Find Common IDs",task:"Use INTERSECT to return BusinessEntityID values present in both Employee and Person.Person.",hint:"INTERSECT needs two compatible SELECT statements.",solution:"SELECT BusinessEntityID FROM HumanResources.Employee\nINTERSECT\nSELECT BusinessEntityID FROM Person.Person;",required:[{label:"Uses INTERSECT",tests:[s=>s.includes("intersect")]},{label:"Uses Employee",tests:[s=>s.includes("humanresources.employee")]},{label:"Uses Person.Person",tests:[s=>s.includes("person.person")]},{label:"Selects BusinessEntityID",tests:[s=>s.includes("businessentityid")]}]},
  {id:"C010",level:"Expert",category:"CORRELATED SUBQUERY",title:"Sum Each Order's Quantity",task:"For every purchase order header row, calculate the total OrderQty from its matching detail rows with a correlated subquery.",hint:"The inner query must reference the outer PurchaseOrderID.",solution:"SELECT poh.PurchaseOrderID,\n       (SELECT SUM(pod.OrderQty)\n        FROM Purchasing.PurchaseOrderDetail AS pod\n        WHERE pod.PurchaseOrderID = poh.PurchaseOrderID\n        GROUP BY pod.PurchaseOrderID) AS SumOrderQty\nFROM Purchasing.PurchaseOrderHeader AS poh\nORDER BY poh.PurchaseOrderID;",required:[{label:"Uses PurchaseOrderHeader as outer source",tests:[s=>s.includes("purchasing.purchaseorderheader")]},{label:"Uses PurchaseOrderDetail inside the subquery",tests:[s=>s.includes("purchasing.purchaseorderdetail")]},{label:"Uses SUM(OrderQty)",tests:[s=>s.includes("sum(")&&s.includes("orderqty")]},{label:"References the outer PurchaseOrderID",tests:[s=>s.includes("pod.purchaseorderid")&&s.includes("poh.purchaseorderid")]},{label:"Contains a nested SELECT",tests:[s=>s.includes("select")&&s.includes("(")]}]},
  {id:"C011",level:"Expert",category:"NESTED SUBQUERY",title:"Trace the Bikes Category",task:"Find distinct ProductSubCategoryID values for products whose category name contains Bikes using nested IN subqueries.",hint:"Follow Product → ProductSubcategory → ProductCategory with nested IN statements.",solution:"SELECT DISTINCT ProductSubCategoryID\nFROM Production.Product\nWHERE ProductSubCategoryID IN (\n  SELECT ProductSubCategoryID\n  FROM Production.ProductSubcategory\n  WHERE ProductCategoryID IN (\n    SELECT ProductCategoryID\n    FROM Production.ProductCategory\n    WHERE Name LIKE '%Bikes%'\n  )\n);",required:[{label:"Uses DISTINCT ProductSubCategoryID",tests:[s=>s.includes("distinct")&&s.includes("productsubcategoryid")]},{label:"Uses ProductSubcategory",tests:[s=>s.includes("production.productsubcategory")]},{label:"Uses ProductCategory",tests:[s=>s.includes("production.productcategory")]},{label:"Uses nested IN",tests:[s=>s.includes(" in ")&&s.split(" in ").length>=3]},{label:"Searches for Bikes",tests:[s=>s.includes("bikes")&&s.includes("like")]}]},
  {id:"C012",level:"Expert",category:"CASE",title:"Classify Vacation Hours",task:"Create a CASE expression that labels VacationHours above 70 as over limit and otherwise as within limit.",hint:"CASE evaluates WHEN conditions and returns the matching THEN result.",solution:"SELECT NationalIDNumber, VacationHours,\nCASE\n  WHEN VacationHours > 70 THEN 'Vacation hours over limit'\n  ELSE 'Vacation Hours within limit'\nEND AS VacationHourLimit\nFROM HumanResources.Employee;",required:[{label:"Uses CASE and END",tests:[s=>s.includes("case")&&s.includes("end")]},{label:"Checks VacationHours > 70",tests:[s=>s.includes("vacationhours > 70")]},{label:"Returns an over-limit label",tests:[s=>s.includes("over limit")]},{label:"Uses HumanResources.Employee",tests:[s=>s.includes("humanresources.employee")]}]}
];
