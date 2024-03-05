package com.yoga.shanthikrishna.mapper;
import com.yoga.shanthikrishna.dto.CourseDto;
import com.yoga.shanthikrishna.entity.Course;
public class CourseMapper {

    public static CourseDto mapToCourseDto(Course course) {
        CourseDto courseDto = new CourseDto();
        courseDto.setCourseId(course.getCourseId());
        courseDto.setCourseName(course.getCourseName());
        courseDto.setCourseDescription(course.getCourseDescription());
        courseDto.setCourseDuration(course.getCourseDuration());
        courseDto.setFees(course.getFees());
        courseDto.setNoOfSeats(course.getNoOfSeats());
        return courseDto;
    }

    public static Course mapToCourse(CourseDto courseDto) {
        Course course = new Course();
        course.setCourseId(courseDto.getCourseId());
        course.setCourseName(courseDto.getCourseName());
        course.setCourseDescription(courseDto.getCourseDescription());
        course.setCourseDuration(courseDto.getCourseDuration());
        course.setFees(courseDto.getFees());
        course.setNoOfSeats(courseDto.getNoOfSeats());
        return course;
    }

}
