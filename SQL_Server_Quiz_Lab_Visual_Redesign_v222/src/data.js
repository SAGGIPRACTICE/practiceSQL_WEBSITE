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
      "Product \u2192 ProductSubcategory \u2192 ProductCategory",
      "Product \u2192 Person \u2192 Vendor",
      "Employee \u2192 Address \u2192 Product",
      "Order \u2192 State \u2192 Person"
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
