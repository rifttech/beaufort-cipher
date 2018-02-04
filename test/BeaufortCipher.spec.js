import { assert } from 'chai';  // Using Assert style
import { expect } from 'chai';  // Using Expect style
import { should } from 'chai';  // Using Should style
import {encipher, decipher} from '../lib';
describe('Beaufort cipher', function() {
  describe('encipher and decipher message', function() {   
    it('encipher', function() {     
      let cipherText = encipher("HELLOWORLD","KEY");
      expect(cipherText).to.equal("DANZQCWNNH");
      
    });

    it('decipher', function() {     
      let plainText = decipher("DANZQCWNNH","KEY");
      expect(plainText).to.equal("HELLOWORLD");
      
    });
  });
});
