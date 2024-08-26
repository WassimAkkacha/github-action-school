import { StringUtils } from "../app/Utils";

describe("StringUtils test suite", () => {
  let stringUtils: StringUtils;

  beforeEach(() => {
    stringUtils = new StringUtils();
  });

  test("should return uppercase", () => {
    //arrange
    const str = "abc";
    const expectResult = "ABC";
    //act
    const result = stringUtils.toUpperCase(str);
    //assert
    expect(result).toBe(expectResult);
  });

  test('Should throw error on invalid argument - function', ()=>{
    //arrange
    const str = '';
    //act
    const expectError = () => { 
        stringUtils.toUpperCase(str);
    }
    //assert           
    expect(expectError).toThrow('Invalid argument!');
    })

    describe('getStringInfo for arg My-String should', ()=>{

        test('return right length', ()=>{
            //arrange
            const str = "My-String";
            const expectResult = 9;
            //act
            const actual = stringUtils.getStringInfo(str);
            //assert
            expect(actual.characters).toHaveLength(expectResult);
        });
        
        test('return right lower case', ()=>{
            //arrange
            const str = "My-String";
            const expectResult = "my-string";
            //act
            const actual = stringUtils.getStringInfo(str);
            //assert
            expect(actual.lowerCase).toBe(expectResult);
        });
    
        test('return right characters', ()=>{
            //arrange
            const str = "My-String";
            //act
            const actual = stringUtils.getStringInfo('My-String');
            //assert
            expect(actual.characters).toEqual(['M', 'y', '-','S', 't', 'r','i', 'n', 'g']);
            expect(actual.characters).toContain<string>('M');
        });
    })


    describe('ToUpperCase examples: Parametrized tests', ()=>{
        test.each([
            {input:'abc', expected: 'ABC'},
            {input:'My-String', expected: 'MY-STRING'},
            {input:'def', expected: 'DEF'}
        ])('$input toUpperCase should be $expected', ({input, expected})=>{
            //act
            const actual = stringUtils.toUpperCase(input);
            //assert
            expect(actual).toBe(expected);
        });
    })

});
