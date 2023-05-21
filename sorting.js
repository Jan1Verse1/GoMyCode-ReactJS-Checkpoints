//pass parameter by reference
FUNCTION dot_product(VAR pair : ARRAY_OF ARRAY_OF INTEGER) : INTEGER
BEGIN
    theDot := 0;
            //first vector of the "pair"
            V1 := pair[0];
            //first vector of the "pair"
            V2 := pair[1];
            FOR i FROM 0 TO V1.length - 1 STEP 1  DO
                product := V1[i] * V2[i];
                theDot := theDot + product;
            END_FOR
    RETURN theDot ;
END
//pass parameter by value
FUNCTION dot_product(pair : ARRAY_OF ARRAY_OF INTEGER) : INTEGER
BEGIN
    theDot := 0;
            //first vector of the "pair"
            V1 := pair[0];
            //first vector of the "pair"
            V2 := pair[1];
            FOR i FROM 0 TO V1.length - 1 STEP 1  DO
                product := V1[i] * V2[i];
                theDot := theDot + product;
            END_FOR
    RETURN theDot ;
END


ALGORITHM dot_product
VAR
    vectorSet : ARRAY_OF ARRAY_OF ARRAY_OF INTEGER[n];
    vectorPair : ARRAY_OF ARRAY_OF INTEGER[2];
    V1 : ARRAY_OF INTEGER[3]; 
    V2 : ARRAY_OF INTEGER[3]; 
    theDot : INTEGER;
    i,j:INTEGER;

    [ [[1, 2, 3],[1, 2, 3]] , [[1, 2, 3],[1, 2, 3]] ,[[1, 2, 3],[1, 2, 3]] ]
    [       vectorPair      ,       vectorPair      ,       vectorPair     ]
BEGIN
    //dot_product
    Read(vectorSet);
    FOR j FROM 0 TO vectorSet.length - 1 STEP 1  DO
        vectorPair := vectorSet[j];
        dot_product(vectorPair);
        IF (theDot == 0) THEN
            Write(vectorPair "are orthogonal");
        ELSE
            Write("no vectors are orthogonal");
        END_IF
    END_FOR

END




