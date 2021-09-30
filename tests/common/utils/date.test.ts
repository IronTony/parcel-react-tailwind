import { formatDate } from '~/common/utils/date';

describe('Date utils', () => {
  describe('formatDate', () => {
    it('should format a timestamp to date', () => {
      // Arrange
      const timestamp = 1632998299000;

      // Act
      const formattedDate = formatDate(timestamp);

      // Assert
      expect(formattedDate).toBe('9/30/2021');
    });

    it('should throw if input is undefined', () => {
      expect(() => {
        formatDate();
      }).toThrow(RangeError);
    });
  });
});
