import test from 'node:test';
import assert from 'node:assert/strict';
import { FormValidationError, publicFormError, validateText, validateEmail, validateAge } from '../src/utils/formValidation.ts';

test('backend and network errors never reach the public message', () => {
  for (const error of [new Error('private schema: relation volunteers'), { message: 'JWT secret detail' }, 'server detail']) {
    assert.equal(publicFormError(error), 'No pudimos guardar tu registro. Inténtalo de nuevo más tarde.');
  }
  assert.equal(publicFormError(new FormValidationError('Completa el nombre.')), 'Completa el nombre.');
});
test('trim required text and reject blank or oversized input', () => {
  assert.equal(validateText('  Ana  ', 'nombre', 150, true), 'Ana');
  assert.throws(() => validateText('   ', 'nombre', 150, true), FormValidationError);
  assert.throws(() => validateText('x'.repeat(2001), 'mensaje', 2000), FormValidationError);
});
test('email syntax and age boundaries', () => {
  assert.equal(validateEmail(' test@example.com '), 'test@example.com');
  for (const email of ['invalid', 'a@b', 'a b@example.com', 'x'.repeat(255) + '@example.com']) {
    assert.throws(() => validateEmail(email), FormValidationError);
  }
  for (const age of ['', '4', '121', '18.5', '18abc', '1e2', '-1']) {
    assert.throws(() => validateAge(age), FormValidationError);
  }
  assert.equal(validateAge('5'), 5);
  assert.equal(validateAge('120'), 120);
});
